import { useState } from "react";
import { useEffect } from "react";
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
  const [hideDone, setHideDone] = useState(
    JSON.parse(localStorage.getItem("hideDone")) || false
    );

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    );


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

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (

    <Container>
      <Header />
      <Main
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
