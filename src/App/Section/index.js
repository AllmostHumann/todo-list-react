import { Body, Container, Header } from "./styled";

const Section = ({ listTitle, listBody, extraHeaderContent, bodyTitle, bodyContent }) => (
  <section>
    <Body>
      {bodyTitle}
    </Body>
    {bodyContent}
    <Container>
      <Header>
        {listTitle}
      </Header>
      {extraHeaderContent}
    </Container>
    {listBody}
  </section>
);

export default Section;