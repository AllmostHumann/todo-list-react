import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [hideDone, setHideDone] = useState(
        JSON.parse(localStorage.getItem("hideDone")) || false
    );

    useEffect(() => {
        localStorage.setItem("hideDone", JSON.stringify(hideDone));
    }, [hideDone]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };


    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => 
            task.id === id ? { ...task, done: !task.done } : task));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(tasks => ({
            ...tasks,
            done: true
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return { tasks, hideDone, removeTask, toggleTaskDone, setAllDone, addNewTask, toggleHideDone }
};