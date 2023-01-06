import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Body from "./Body";
import Container from "./Container";

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

    <Container>
      <Header />
      <Body
        title="Dodaj nowe zadanie"
        body={<Form
          tasks={tasks}
          hideDone={hideDone}
          addNewTask={addNewTask}
        />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
