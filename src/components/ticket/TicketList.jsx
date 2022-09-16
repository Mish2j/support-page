import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import TicketItem from "./TicketItem";

import styles from "./TicketList.module.css";

const TicketList = ({ tickets }) => {
  const body = tickets.map((ticket) => {
    return <TicketItem key={ticket.id} ticket={ticket} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">TICKET</th>
          <th scope="col">STATUS</th>
          <th scope="col">
            CREATED ON <FontAwesomeIcon icon={faArrowDown} />
          </th>
          <th scope="col">REPLIES</th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default TicketList;
