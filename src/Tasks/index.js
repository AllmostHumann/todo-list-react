import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="taskList">
    {tasks.map(tasks => (
      <li key={tasks.id}
        className={`taskList__item ${tasks.done && hideDone
          ? "taskList__item--hidden"
          : ""}`
        }
      >
        <button className="taskList__button__done">
          {tasks.done
            ? "✔"
            : ""
          }
        </button>
        <span className={`taskList__content ${tasks.done
          ? "taskList__item--done"
          : ""}`
        }
        >
          {tasks.content}
        </span>
        <button className="taskList__button__remove">
          🗑
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;