import styled from "styled-components";

export const FormElement = styled.form`
    margin: -3px auto 10px auto;
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

export const FormInput = styled.input`
    border: 1px solid hsl(0, 1%, 69%);
    padding: 5px;
    @media (max-width: 767px) {
        width: 100%;
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