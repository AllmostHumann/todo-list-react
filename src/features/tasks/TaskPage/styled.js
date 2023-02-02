import styled from "styled-components";

export const StyledText = styled.div`
    padding: 20px;
    background-color: hsl(0, 0%, 100%);
    line-height: 1.5;
    margin-bottom: 10px;
    border:1px;
    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }
`;