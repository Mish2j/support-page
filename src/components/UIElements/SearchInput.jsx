import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchInput.module.css";

const SearchInput = ({ placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder={placeholder} type="search" id="site-search" />
    </div>
  );
};

export default SearchInput;
