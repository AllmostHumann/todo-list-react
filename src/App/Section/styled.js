import styled from "styled-components";

export const Div = styled.div`
    border-bottom: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin: auto;

    @media (max-width: 767px) {
        margin: 0;
        background-color: rgb(255, 255, 255);
        font-weight: 700;
        font-size: 20px;
}
`;