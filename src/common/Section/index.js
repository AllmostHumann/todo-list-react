import { Body, Container, List, TopSection } from "./styled";
import Button from "../../features/tasks/ExampleTasksButton";

const Section = ({ listTitle, listContent, bodyTitle, bodyContent, buttons }) => {

  return (
    <section>
      <TopSection>
        <Body>
          {bodyTitle}
        </Body>
        <Button />
      </TopSection>
      {bodyContent}
      <Container>
        <List>
          {listTitle}
        </List>
        {buttons}
      </Container>
      {listContent}
    </section>
  )
};

export default Section;