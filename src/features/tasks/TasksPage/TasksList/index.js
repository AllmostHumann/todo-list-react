import { List, Item, Content, Button, StyledLink } from "./styled";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { toTask } from "../../../../routers";
import searchQueryParamName from "../Search/searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone)
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((tasks) => (
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
            <StyledLink to={toTask({ id: tasks.id })}>{tasks.content}</StyledLink>
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