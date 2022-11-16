import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const toggleHideDoneTasks = false;


function App() {
  return (

    <Container>
      <Header />
      <Main
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} toggleHideDoneTasks={toggleHideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} toggleHideDoneTasks={toggleHideDoneTasks} />
        }
      />
    </Container>

  );
}

export default App;
