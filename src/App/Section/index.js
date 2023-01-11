import { Container, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Container>
      <Header>
        {title}
      </Header>
      <div>
        {extraHeaderContent}
      </div>
    </Container>
    {body}
  </section>
);

export default Section;