import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Container from "../common/Container";
import GlobalStyle from "../globalStyle";

function App() {
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
      <GlobalStyle />
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
            <Tasks
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

export default App;