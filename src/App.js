import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import Container from "./Container";
import * as hello from "./utils/hello";

hello.hello();
console.log(hello.name);

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(tasks => {
      if (tasks.id === id) {
        return { ...tasks, done: !tasks.done };
      }

      return tasks
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(tasks => ({
      ...tasks,
      done: true
    })))
  };


  return (

    <Container>
      <Header />
      <Main
        title="Dodaj nowe zadanie"
        body={<Form tasks={tasks} hideDone={hideDone} />}
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
