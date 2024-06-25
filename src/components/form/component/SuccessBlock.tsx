import image from '../../../assets/success-image.svg';
import styles from '../Form.module.scss';

const SuccessBlock = () => {
  return (
    <div className={styles.success} role="alert">
      <h1>User successfully registered</h1>
      <img src={image} alt="image" />
    </div>
  );
}

export default SuccessBlock;
