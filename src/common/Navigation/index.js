import { toTasks, toAutor } from "../../routers";
import { StyledNavLink, List, Item } from "./style";

export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAutor()}>Autor</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};