import { useEffect, useRef } from "react";
import TasksList from "../TasksPage/TasksList/index";
import Buttons from "../TasksPage/Buttons";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Form from "./Form";
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";

function TasksPage() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <Header
        title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        optionalContent={<ExampleTasksButton />}
        body={<Form inputRef={inputRef} />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista Zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;