import { useState } from "react";
import { FormElement, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <FormElement
        onSubmit={onFormSubmit}
        >
            <FormInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus required
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <FormButton>
                Dodaj zadanie
            </FormButton>
        </FormElement>
    );
};

export default Form;