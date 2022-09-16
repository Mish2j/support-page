import styles from "./TicketReply.module.css";

const TickeReply = ({ replies, isStaff, author, avatarUrl }) => {
  console.log(isStaff);
  console.log(replies);

  return (
    <td className={styles.replies}>
      <img src={avatarUrl} alt={author} />
      <p>Last By {author}</p>
      <span>{replies}</span>
      {isStaff && <span>STAFF</span>}
    </td>
  );
};

export default TickeReply;
