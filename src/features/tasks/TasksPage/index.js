import TasksList from "../TasksPage/TasksList/index";
import Buttons from "../TasksPage/Buttons";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";

function TasksPage() {
  return (
    <>
      <Container>
        <Header
          title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          listTitle="Lista zadań"
          buttons={<Buttons />}
          listContent={<TasksList />}
        />
      </Container>
    </>
  );
}

export default TasksPage;