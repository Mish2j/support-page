import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import TicketStatus from "../ticket/TicketStatus";

import styles from "./Dropdown.module.css";

const Dropdown = ({ label, data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const userSelectHandler = (ticketData) => {
    setSelected(ticketData);
    toggleDropdownHandler();
  };

  const toggleDropdownHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const circleStyles = { borderRadius: "100%", width: "20px", height: "20px" };

  const items = data.map((ticketData) => {
    return (
      <li
        onClick={userSelectHandler.bind(null, ticketData)}
        key={ticketData.type}
      >
        <p>{ticketData.type}</p>
        <TicketStatus
          status={ticketData.type}
          text={ticketData.count}
          style={circleStyles}
        />
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.dropdown} onClick={toggleDropdownHandler}>
        <p className={styles.label}>{selected ? selected.type : label.name}</p>
        <TicketStatus
          status={"All Tickets"}
          text={selected ? selected.count : label.count}
          style={circleStyles}
        />
        <FontAwesomeIcon icon={isDropdownOpen ? faAngleUp : faAngleDown} />
      </div>
      {isDropdownOpen && (
        <div className={styles.open}>
          <ul>{items}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
