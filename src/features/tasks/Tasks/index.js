import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(tasks => (
      <Item
        key={tasks.id}
        hidden={tasks.done && hideDone}
      >
        <Button
          type="done"
          onClick={() => toggleTaskDone(tasks.id)}
        >
          {tasks.done ? "✔" : ""}
        </Button>
        <Content
        done={tasks.done}
        >
          {tasks.content}
        </Content>
        <Button
          type="remove"
          onClick={() => removeTask(tasks.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List >
);

export default Tasks;