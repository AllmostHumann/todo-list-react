import { Body, Container, List, TopSection } from "./styled";
import { ExampleButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { exampleTasks, selectLoading } from "../../features/tasks/tasksSlice";

const Section = ({ listTitle, listContent, bodyTitle, bodyContent, buttons }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <section>
      <TopSection>
        <Body>
          {bodyTitle}
        </Body>
        <ExampleButton 
        onClick={() => dispatch(exampleTasks())}
        disabled={loading}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
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