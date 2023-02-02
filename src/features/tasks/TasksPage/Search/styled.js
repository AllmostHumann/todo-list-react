import styled from "styled-components";

export const Wrapper = styled.form`
    margin-bottom: 10px;
    background-color: hsl(0, 0%, 100%);
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
}
`;