import styles from './Image.module.scss';
import { FC } from "react";

import photoCover from '../../../assets/photo-cover.svg';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: FC<ImageProps> = ({ src = photoCover,  ...props }) => {
  return <img src={src} className={styles.avatar} alt="image" {...props} />;
}

export default Image;
