import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

function Tasks() {

  return (
    <>
      <Container>
        <Header />
        <Section
          bodyTitle="Dodaj nowe zadanie"
          bodyContent={
            <Form />
          }
          listTitle="Lista zadań"
          buttons={
            <Buttons />
          }
          listContent={
            <TasksList />
          }
        />
      </Container>
    </>
  );
}

export default Tasks;