import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { toTask, toTasks, toAutor } from "./routers";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to={toTasks()}>
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAutor()}>
            O autorze
          </StyledNavLink>
        </li>
      </ul>
      <Switch>
      <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAutor()}>
          <AuthorPage />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;