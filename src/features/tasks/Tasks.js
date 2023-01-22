import { useTasks } from "./useTasks";
import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { selectTasks } from "./tasksSlice";

function Tasks() {

  const {
    // tasks,
    // hideDone,
    removeTask,
    // toggleTaskDone,
    setAllDone,
    // addNewTask,
    // toggleHideDone,
  } = useTasks();

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
            <Buttons
              setAllDone={setAllDone}
            />
          }
          listContent={
            <TasksList
              removeTask={removeTask}
            />
          }
        />
      </Container>
    </>
  );
}

export default Tasks;