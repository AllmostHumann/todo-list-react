import { Body, Container, List, TopSection } from "./styled";
import { ExampleButton } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../features/tasks/tasksSlice";

const Section = ({ listTitle, listContent, bodyTitle, bodyContent, buttons }) => {
  const dispatch = useDispatch();

  return (
    <section>
      <TopSection>
        <Body>
          {bodyTitle}
        </Body>
        <ExampleButton onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </ExampleButton>
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