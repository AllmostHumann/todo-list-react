import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <React.Fragment>
        <button
          onClick={toggleHideDone}
          className="buttons__button"
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>
);

export default Buttons;

