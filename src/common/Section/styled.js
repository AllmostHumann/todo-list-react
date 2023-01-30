import styled from "styled-components";

export const TopSection = styled.div`
    border-bottom: 5px solid hsl(0, 0%, 87%);
    background-color: hsl(0, 0%, 100%);
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
@media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Container = styled.div`
    border-bottom: 1px solid hsl(0, 0%, 87%);
    background-color: hsl(0, 0%, 100%);
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

export const List = styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin: auto;
    padding: 0 10px 0 10px;
@media (max-width: 767px) {
        margin: 0;
        font-weight: 700;
        font-size: 20px;
}
`;

export const Body = styled.h2`
    padding: 10px;
    margin: auto;
    background-color: hsl(0, 0%, 100%);
    font-weight: 700;
    font-size: 25px;
@media (max-width: 767px) {
        margin: 0;
        font-weight: 700;
        font-size: 20px;
}
`;

export const ExampleButton = styled.button`
    border: none;
    background-color: hsl(0, 0%, 100%);
    color: teal;
    margin: 0;
    transition: color 0.5s;
@media (max-width: 767px) {
        margin: 10px;
};

&:hover {
    color: hsla(180, 100%, 25%, 0.822);
}
&:disabled {
    color: hsl(0, 0%, 80%);
}
`;