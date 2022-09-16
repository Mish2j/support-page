import { TICKET_STATUS } from "../../helper/constants";

import styles from "./TicketStatus.module.css";

const TicketStatus = ({ status }) => {
  let bgColor = "";

  switch (status.toUpperCase()) {
    case TICKET_STATUS.OPEN:
      bgColor = "var(--color-blue)";
      break;
    case TICKET_STATUS.RESOLVED:
      bgColor = "var(--color-green)";
      break;
    case TICKET_STATUS.FEEDBACK:
      bgColor = "var(--color-purple)";
      break;
    default:
      bgColor = "transparent";
  }

  return (
    <td>
      <span style={{ backgroundColor: bgColor }} className={styles.status}>
        {status}
      </span>
    </td>
  );
};

export default TicketStatus;
