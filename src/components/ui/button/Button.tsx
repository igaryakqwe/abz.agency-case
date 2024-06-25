import {FC, ReactNode} from "react";
import styles from './Button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
