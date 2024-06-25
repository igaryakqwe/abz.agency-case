import {SubmitHandler, useForm} from "react-hook-form";
import Input from "../ui/input/Input.tsx";
import styles from './Form.module.scss';
import Button from "../ui/button/Button.tsx";
import Radio from "../ui/radio/Radio.tsx";
import {useQuery} from "react-query";
import {PositionsResponse} from "../../types/position.ts";
import Loader from "../ui/loader/Loader.tsx";
import Upload from "../ui/upload/Upload.tsx";
import {useEffect, useState} from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from './validation';
import SuccessBlock from "./component/SuccessBlock.tsx";

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  file: File | null;
}

const Form = () => {
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid }
  } = useForm<IFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      file: null
    },
    mode: 'onChange',
  });

  useEffect(() => {
    register('file', { required: true });
  }, [register]);

  const handleFileChange = (file: File | null) => {
    setFile(file);
    setValue('file', file);
  };

  const { isLoading, data } = useQuery<PositionsResponse>(
    'positions',
    () => {
      return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions').then(res => res.json())
    }
  );

  const { data: tokenResponse } = useQuery('token', () => {
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(res => res.json());
  });

  if (isLoading) return (
    <div className={styles.loader}>
      <Loader />
    </div>
  )

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id.toString());
    formData.append('photo', data.file as Blob);

    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Token': tokenResponse?.token,
      },
      body: formData,
    });

    if (response.ok) {
      return <SuccessBlock />;
    }
  };

  return (
    <div id="sign-in" className={styles.wrapper}>
      <h1 className={styles.header}>Working with POST request</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Your name"
          {...register('name')}
          error={errors?.name?.message}
        />
        <Input
          label="Email"
          {...register('email')}
          error={errors?.email?.message}
        />
        <Input
          label="Phone"
          {...register('phone')}
          error={errors?.phone?.message}
        />
        <div className={styles.radio}>
          <span>Select your position</span>
          {data?.positions.map(position => (
            <Radio
              key={position.id}
              id={`radio${position.id}`}
              label={position.name}
              value={position.id}
              {...register('position_id')}
            />
          ))}
        </div>
        <Upload file={file} setFile={handleFileChange} />
        <Button type="submit" disabled={!isValid || !file}>Sign Up</Button>
      </form>
    </div>
  );
}

export default Form;
