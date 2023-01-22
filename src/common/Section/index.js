import { Body, Container, List } from "./styled";

const Section = ({ listTitle, listContent, bodyTitle, bodyContent, buttons }) => (
  <section>
    <Body>
      {bodyTitle}
    </Body>
    {bodyContent}
    <Container>
      <List>
        {listTitle}
      </List>
      {buttons}
    </Container>
    {listContent}
  </section>
);

export default Section;