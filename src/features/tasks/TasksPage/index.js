import TasksList from "../TasksPage/TasksList/index";
import Buttons from "../TasksPage/Buttons";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Form from "./Form";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {

  return (
    <Container>
      <Header
        title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        optionalContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section body={<Form />}/>
      <Section
        title="Lista Zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;