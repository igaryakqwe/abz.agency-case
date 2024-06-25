import {useQuery} from "react-query";
import Loader from "../ui/loader/Loader.tsx";
import {User} from "../../types/user.ts";
import Card from "../card/Card.tsx";
import styles from "./UsersList.module.scss";
import {useState} from "react";
import Button from "../ui/button/Button.tsx";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  const fetchUsers = () => {
    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
      .then(res => res.json())
      .then(json => json.users);
  };

  const { isLoading, refetch } = useQuery<User[]>(
    ['users', page],
    fetchUsers,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setUsers(prevUsers => [...prevUsers, ...data]);
      },
    }
  )

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    refetch();
  };

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Working with GET request</h1>
      <div className={styles['user-list']}>
        {users?.map(user => (
          <Card user={user} key={user.id} />
        ))}
      </div>
      <div className={styles['button-container']}>
        <Button onClick={loadMore}>Show more</Button>
      </div>
    </div>
  )
}

export default UsersList;
