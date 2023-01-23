import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone)
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(tasks => (
        <Item
          key={tasks.id}
          hidden={tasks.done && hideDone}
        >
          <Button
            type="done"
            onClick={() => dispatch(toggleTaskDone(tasks.id))}
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
            onClick={() => dispatch(removeTask(tasks.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List >
  );
};

export default TasksList;