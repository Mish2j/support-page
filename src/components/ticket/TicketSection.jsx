import { useState, useEffect } from "react";

import Container from "../UIElements/Container";
import Section from "../UIElements/Section";
import NoTicket from "./NoTicket";
import TicketList from "./TicketList";

const TICKETS = [
  {
    id: 1,
    title: "Domain mapped site shows cors policy error",
    created_time: "2022-04-20 21:52:39",
    created_time_utc: "2022-04-20 21:52:39",
    forum: {
      id: 1,
      title: "General WordPress",
      url: "https://example.com/",
    },
    author: {
      id: 1,
      display_name: "John doe",
      avatar_url:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000",
      is_staff: true,
    },
    latest_post_author: {
      id: 2,
      display_name: "Leon",
      avatar_url:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000",
      is_staff: false,
    },
    num_replies: 1,
    status: "resolved",
    url: "https://example.com/",
  },

  {
    id: 2,
    title: "AFTER ENABLING CDN IMAGE SIZES ARE BIG",
    created_time: "2022-04-20 21:52:39",
    created_time_utc: "2022-04-20 21:52:39",
    forum: {
      id: 1,
      title: "The Hub",
      url: "https://example.com/",
    },
    author: {
      id: 2,
      display_name: "John doe",
      avatar_url:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000",
      is_staff: true,
    },
    latest_post_author: {
      id: 2,
      display_name: "Jack Sean",
      avatar_url:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000",
      is_staff: true,
    },
    num_replies: 3,
    status: "open",
    url: "https://example.com/",
  },
];

const TicketSection = () => {
  const [tickets, setTickets] = useState(TICKETS);

  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     try {
  //       const response = await fetch("./tickets.json");
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   setTickets();

  //   fetchTickets();
  // }, [tickets]);
  tickets.length = 0;
  return (
    <Section>
      <Container title="My Tickets" type={"tickets"}>
        {tickets.length === 0 ? <NoTicket /> : <TicketList tickets={tickets} />}
      </Container>
    </Section>
  );
};

export default TicketSection;
