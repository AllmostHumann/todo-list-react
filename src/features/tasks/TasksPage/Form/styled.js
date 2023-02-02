import styled from "styled-components";

export const FormElement = styled.form`
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

export const FormButton = styled.button`
    color: hsl(0, 0%, 100%);
    background-color: hsl(180, 100%, 25%);
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: 1s;
@media (max-width: 767px) {
        width: 100%;
}    
    &:hover {
    transform: scale(1.15);
    @media (max-width: 767px) {
    transform: scale(1.03);    
    }
};
`;