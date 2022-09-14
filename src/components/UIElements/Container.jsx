import styles from "./Container.module.css";

const Container = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <header>
        <h3>{title}</h3>
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Container;
