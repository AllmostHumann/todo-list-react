import { ExampleButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { exampleTasks, selectLoading } from "../tasksSlice";

const Button = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <ExampleButton
            onClick={() => dispatch(exampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </ExampleButton>
    );
};


export default Button;