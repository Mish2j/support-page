import Container from "../UIElements/Container";
import SearchInput from "../UIElements/SearchInput";
import Section from "../UIElements/Section";
import ForumLogo from "../../assets/ForumLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./ForumSection.module.css";

const ForumSection = () => {
  return (
    <Section>
      <Container title="Support Resources" type="forum">
        <ForumLogo />
        <h2>Support Forums</h2>
        <p>Search the topic you need help with in our support forums.</p>
        <a className={styles.link} href="/">
          Browse Forums
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
        <SearchInput placeholder="Search support forum" />
      </Container>
    </Section>
  );
};

export default ForumSection;
