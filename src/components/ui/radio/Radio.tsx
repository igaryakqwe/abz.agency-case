import { FC } from "react";
import styles from './Radio.module.scss';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Radio: FC<RadioProps> = ({ id, label, ...props }) => {
  return (
    <div>
      <input className={styles.radio} type="radio" id={id} {...props} />
      <label className={styles.label} htmlFor={id}>{label}</label>
    </div>
  );
}

export default Radio;
