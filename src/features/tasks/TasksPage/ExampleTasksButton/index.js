import { Button } from "../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { exampleTasks, selectLoading } from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button
            onClick={() => dispatch(exampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};


export default ExampleTasksButton;