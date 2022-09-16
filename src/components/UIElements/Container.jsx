import ForumHeader from "../forum/ForumHeader";
import TicketsHeader from "../ticket/TicketsHeader";

import styles from "./Container.module.css";

const Container = ({ title, children, type }) => {
  let headerRightCol = "";

  if (type === "forum") {
    headerRightCol = <ForumHeader />;
  }

  if (type === "tickets") {
    headerRightCol = <TicketsHeader />;
  }

  return (
    <div className={styles.container}>
      <header>
        <p>{title}</p>
        {type && headerRightCol}
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Container;
