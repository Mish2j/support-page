import styles from "./TicketDate.module.css";

const TicketDate = ({ time }) => {
  const today = new Date();
  const tDate = new Date(time);
  // console.log("Today: " + today);
  // console.log(tDate.getMonth());
  // console.log(tDate.getDate());
  // console.log(tDate.getTime());
  // console.log(tDate.toLocaleDateString("en-US"));

  //   console.log(new Date(time)).toLocaleDateString("en-US");

  const convertDateTime = (dateTime) => {};

  return (
    <td className={styles.date}>
      <time dateTime={time}>Today @ {time}</time>
    </td>
  );
};

export default TicketDate;
