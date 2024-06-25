import React, { forwardRef } from "react";
import styles from './Radio.module.scss';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({ id, label, ...props }, ref) => {
  return (
    <div>
      <input className={styles.radio} type="radio" id={id} ref={ref} {...props} />
      <label className={styles.label} htmlFor={id}>{label}</label>
    </div>
  );
});

export default Radio;
