import { FC } from "react";
import styles from './Input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: FC<InputProps> = ({ label, error, ...props }) => {
  const inputStyles = error ? styles['input-error'] : styles['input-default'];
  const labelStyles = error ? styles['label-error'] : styles['label-default'];

  return (
    <>
      <div className={styles['input-container']}>
        <input
          id="input"
          name="fname"
          aria-labelledby="label-input"
          className={inputStyles}
          placeholder=""
          {...props}
        />
        {label && (
          <label className={labelStyles} htmlFor="input" id="label-input">
            <div className={styles.text}>{label}</div>
          </label>
        )}

      </div>
      {error && (
        <div className={styles.error}>{error}</div>
      )}
    </>
  );
}

export default Input;
