import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
  const inputStyles = error ? styles['input-error'] : styles['input-default'];
  const labelStyles = error ? styles['label-error'] : styles['label-default'];

  return (
    <div>
      <div className={styles['input-container']}>
        <input
          ref={ref}
          aria-labelledby="label-input"
          className={inputStyles}
          placeholder=""
          {...props}
        />
        {label && (
          <label className={labelStyles} id="label-input">
            <div className={styles.text}>{label}</div>
          </label>
        )}
      </div>
      {error && (
        <div className={styles.error}>{error}</div>
      )}
    </div>
  );
});

export default Input;
