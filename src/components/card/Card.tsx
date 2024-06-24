import styles from './Card.module.scss'
import Image from "../ui/image/Image.tsx";
import {FC} from "react";
import {User} from "../../types/user.ts";
import Tooltip from "../ui/tooltip/Tooltip.tsx";

interface UserProps {
  user: User;
}

const Card: FC<UserProps> = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={user.photo} />
      <Tooltip text={user.name} />
      <div className={styles.info}>
        <p className={styles.text}>{user.position}</p>
        <Tooltip text={user.email}/>
        <p className={styles.text}>{user.phone}</p>
      </div>
    </div>
  );
}

export default Card;
