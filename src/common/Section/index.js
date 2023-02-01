import { Title, Container, List, Wrapper } from "./styled";
import Button from "../../features/tasks/ExampleTasksButton";
import Form from "../../features/tasks/Form";

const Section = ({ listTitle, listContent, title, bodyContent, buttons }) => {

  return (
    <>
      <Wrapper>
        <Title>
          {title}
        </Title>
        <Button />
      </Wrapper>
      <Form />
      <Container>
        <List>
          {listTitle}
        </List>
        {buttons}
      </Container>
      {listContent}
    </>
  )
};

export default Section;