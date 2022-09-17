import { TICKET_STATUS } from "../../helper/constants";

import styles from "./TicketStatus.module.css";

const TicketStatus = ({ status, text, style = {} }) => {
  let bgColor = "";
  let textColor = "";

  switch (status.toUpperCase()) {
    case TICKET_STATUS.OPEN:
      bgColor = "var(--color-blue)";
      textColor = "var(--color-white)";
      break;
    case TICKET_STATUS.RESOLVED:
      bgColor = "var(--color-green)";
      textColor = "var(--color-white)";
      break;
    case TICKET_STATUS.FEEDBACK:
      bgColor = "var(--color-purple)";
      textColor = "var(--color-white)";
      break;
    default:
      console.log(status);
      bgColor = "#e6e6e6";
      textColor = "var(--color-black)";
  }

  return (
    <span
      style={{ backgroundColor: bgColor, color: textColor, ...style }}
      className={styles.status}
    >
      {text}
    </span>
  );
};

export default TicketStatus;
