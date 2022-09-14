import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SearchInput.module.css";

const SearchInput = ({ placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <input placeholder={placeholder} type="search" id="site-search" />
    </div>
  );
};

export default SearchInput;
