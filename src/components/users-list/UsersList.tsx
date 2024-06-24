import {useQuery} from "react-query";
import Loader from "../ui/loader/Loader.tsx";
import {User} from "../../types/user.ts";
import Card from "../card/Card.tsx";
import styles from "./UsersList.module.scss";

const UsersList = () => {
  const { isLoading, data } = useQuery<User[]>(
    ['users'],
    () => {
      return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
        .then(res => res.json())
        .then(json => json.users);
    }
  )

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.header}>Working with GET request</h1>
      <div className={styles['user-list']}>
        {data?.map(user => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default UsersList;
