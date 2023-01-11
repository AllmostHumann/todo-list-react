import { Body, Container, Header } from "./styled";

const Section = ({ listTitle, listContent, bodyTitle, bodyContent, buttons }) => (
  <section>
    <Body>
      {bodyTitle}
    </Body>
    {bodyContent}
    <Container>
      <Header>
        {listTitle}
      </Header>
      {buttons}
    </Container>
    {listContent}
  </section>
);

export default Section;