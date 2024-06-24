import {FC, ReactNode} from "react";
import styles from './Button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, disabled = false, ...props }) => {
  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
