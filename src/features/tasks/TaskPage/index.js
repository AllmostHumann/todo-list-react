import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { StyledText } from "./styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";


function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header
                title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😔"}
                body={
                    <StyledText>
                        <strong>Ukończono:</strong>&nbsp; {task.done ? "Tak" : "Nie"}
                    </StyledText>
                }
            />
        </Container>
    );
}

export default TaskPage;