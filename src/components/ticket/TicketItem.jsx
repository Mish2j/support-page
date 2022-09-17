import TicketStatus from "./TicketStatus";
import TicketDate from "./TicketDate";
import TickeReply from "./TicketReply";

import styles from "./TicketItem.module.css";

const TicketItem = ({ ticket }) => {
  return (
    <tr id={ticket.id}>
      <td className={styles.ticket}>
        <a href={ticket.url}>{ticket.title}</a>
        <a href={ticket.forum?.url}>{ticket.forum?.title}</a>
      </td>
      <td className={styles.ticket}>
        <TicketStatus status={ticket.status} />
      </td>
      <TicketDate time={ticket.created_time_utc} />
      <TickeReply
        replies={ticket.num_replies}
        isStaff={ticket.latest_post_author?.is_staff}
        avatarUrl={ticket.latest_post_author?.avatar_url}
        author={ticket.latest_post_author?.display_name}
      />
    </tr>
  );
};

export default TicketItem;
