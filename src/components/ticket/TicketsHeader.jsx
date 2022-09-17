import SearchInput from "../UIElements/SearchInput";
import Dropdown from "../UIElements/Dropdown";

import styles from "./TicketsHeader.module.css";

const TicketsHeader = () => {
  const ticketData = [
    { type: "all", count: 10 },
    { type: "open", count: 4 },
    { type: "feedback", count: 3 },
    { type: "resolved", count: 3 },
  ];

  return (
    <div className={styles.container}>
      <Dropdown label={{ name: "All Tickets", count: 10 }} data={ticketData} />
      <SearchInput placeholder="Search Tickets" />
    </div>
  );
};

export default TicketsHeader;
