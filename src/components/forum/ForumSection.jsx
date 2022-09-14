import Container from "../UIElements/Container";
import SearchInput from "../UIElements/SearchInput";
import Section from "../UIElements/Section";

const ForumSection = () => {
  return (
    <Section>
      <Container title="Support Resources">
        <SearchInput placeholder="Search support forum" />
      </Container>
    </Section>
  );
};

export default ForumSection;
