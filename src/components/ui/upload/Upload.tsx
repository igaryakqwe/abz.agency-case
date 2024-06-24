import styles from './Upload.module.scss';
import {FC, useState} from "react";

interface UploadProps {
  file: File | null;
  setFile: (file: File) => void;
}

const Upload: FC<UploadProps> = ({ file, setFile }) => {
  const [error, setError] = useState<string | null>(null);
  const fileName = file ? file.name : 'Upload your photo';
  const textStyles = file?.name ? styles['text-black'] : styles['text-dark-gray'];
  const wrapperStyles = error ? styles['wrapper-error'] : styles['wrapper-default'];
  const labelStyles = error ? styles['label-error'] : styles['label-default'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileSizeMB = file.size / (1024 * 1024);

      if (fileSizeMB > 5) {
        setError('Image size must not be larger than 5MB');
        return;
      }

      const url = URL.createObjectURL(file);
      const img = new Image();

      img.onload = () => {
        if (img.width === 70 && img.height === 70) {
          setFile(file);
        } else {
          setError('Image dimensions must be 70x70 pixels');
        }
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  return (
    <>
      <label className={wrapperStyles}>
        <span className={labelStyles}>Upload</span>
        <span className={textStyles}>{fileName}</span>
        <input
          accept=".jpeg, .jpg"
          onChange={handleChange}
          className={styles.input}
          id="upload"
          type="file"
        />
      </label>
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
}

export default Upload;
