import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
&.${activeClassName} {
    color: hsl(0, 100%, 50%);
}
`;
