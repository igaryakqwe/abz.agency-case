import styles from "./Picture.module.scss";
import Button from "../ui/button/Button.tsx";

const Picture = () => {
  return (
    <div className={styles.picture}>
      <div className={styles.description}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
          understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
          should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default Picture;
