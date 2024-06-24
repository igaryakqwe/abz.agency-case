import logo from '../../assets/Logo.svg';
import styles from './Header.module.scss';
import Button from "../ui/button/Button.tsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo"/>
      <div className={styles.auth}>
        <Button>Sign Up</Button>
        <Button>Sign In</Button>
      </div>
    </header>
  );
}

export default Header;
