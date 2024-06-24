import styles from './Card.module.scss'
import Image from "../ui/image/Image.tsx";
import {FC} from "react";
import {User} from "../../types/user.ts";

interface UserProps {
  user: User;
}

const Card: FC<UserProps> = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={user.photo} />
      <p className={styles.text}>{user.name}</p>
      <div className={styles.info}>
        <p className={styles.text}>{user.position}</p>
        <p className={styles.text}>{user.email}</p>
        <p className={styles.text}>{user.phone}</p>
      </div>
    </div>
  );
}

export default Card;
