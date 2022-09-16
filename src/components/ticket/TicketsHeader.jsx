import SearchInput from "../UIElements/SearchInput";
import Dropdown from "../UIElements/Dropdown";

import styles from "./TicketsHeader.module.css";

const TicketsHeader = () => {
  return (
    <div className={styles.container}>
      <Dropdown labels={["All", "Open", "Feedback", "Resolved"]} />
      <SearchInput placeholder="Search Tickets" />
    </div>
  );
};

export default TicketsHeader;
