import { Title, Container, List, Wrapper } from "./styled";
import Form from "../../features/tasks/TasksPage/Form";
import Button from "../../features/tasks/TasksPage/ExampleTasksButton";

const Section = ({ listTitle, listContent, title, buttons }) => {

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