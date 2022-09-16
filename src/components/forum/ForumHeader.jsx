import Button from "../UIElements/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";

import styles from "./ForumHeader.module.css";

const ForumHeader = () => {
  return (
    <div className={styles.container}>
      <a href="/">Need Help?</a>
      <button>
        <FontAwesomeIcon icon={faLifeRing} /> Get Support
      </button>
    </div>
  );
};

export default ForumHeader;
