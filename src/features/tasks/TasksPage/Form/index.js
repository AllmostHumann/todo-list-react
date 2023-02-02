import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { FormElement, FormButton } from "./styled";
import Input from "../../Input";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();
    
    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false, 
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    return (
        <FormElement
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <FormButton
                onClick={focusInput}
            >
                Dodaj zadanie
            </FormButton>
        </FormElement>
    );
};

export default Form;