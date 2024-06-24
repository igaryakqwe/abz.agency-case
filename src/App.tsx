import styles from './App.module.scss';
import Header from "./components/header/Header.tsx";
import Picture from "./components/picture/Picture.tsx";
import UsersList from "./components/users-list/UsersList.tsx";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Picture />
        <UsersList />
      </main>
    </div>
  )
}

export default App

