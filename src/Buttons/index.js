import React from "react";
import { ButtonsDiv, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsDiv>
    {tasks.length > 0 && (
      <React.Fragment>
        <Button
          onClick={toggleHideDone}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </Button>
      </React.Fragment>
    )}
  </ButtonsDiv>
);

export default Buttons;

