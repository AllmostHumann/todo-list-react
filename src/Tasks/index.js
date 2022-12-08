import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (

<ul className="taskList">
  {tasks.map(tasks => (
    <li
      key={tasks.id}
      className={`taskList__item ${tasks.done && hideDone
        ? "taskList__item--hidden"
        : ""}`
      }
    >
      <button className="taskList__button__done"
        onClick={() => toggleTaskDone(tasks.id)}>
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
      <button
        className="taskList__button__remove"
        onClick={() => removeTask(tasks.id)}
      >
        🗑
      </button>
    </li>
  ))}
</ul >
);

export default Tasks;