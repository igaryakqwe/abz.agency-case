import styles from './Image.module.scss';
import {FC} from "react";


interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: FC<ImageProps> = ({ ...props }) => {
  return <img className={styles.avatar} alt="image" {...props} />;
}

export default Image;
