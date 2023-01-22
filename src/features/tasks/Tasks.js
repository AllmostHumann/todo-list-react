import { useTasks } from "./useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

function Tasks() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <>
      <Container>
        <Header />
        <Section
          bodyTitle="Dodaj nowe zadanie"
          bodyContent={
            <Form
              tasks={tasks}
              hideDone={hideDone}
              addNewTask={addNewTask}
            />
          }
          listTitle="Lista zadań"
          buttons={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          listContent={
            <TasksList
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </>
  );
}

export default Tasks;