import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./Dropdown.module.css";

const Dropdown = ({ title = "All Tickets", labels, legend }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const [selected, setSelected] = useState(0);

  const toggleDropdownHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const items = labels.map((label, index) => {
    return <div key={label}></div>;
  });

  return (
    <div className={styles.dropdown} onClick={toggleDropdownHandler}>
      <p>{title}</p>
      <span>10</span>
      <FontAwesomeIcon icon={isDropdownOpen ? faAngleUp : faAngleDown} />
    </div>
  );
};

export default Dropdown;
