import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;

@media (max-width: 767px) {
        flex-basis: auto;
        margin: 10px;
        justify-content: center;
};
`;

export const Button = styled.button`
    border: none;
    background-color: rgb(255, 255, 255);
    color: teal;
    margin: 0 10px 0 10px;
    transition: color 0.5s;

@media (max-width: 767px) {

        margin: 5px 20px 0 0;
};

&:hover {
    color: rgba(0, 128, 128, 0.822);
}

&:disabled {
    color: rgb(204, 204, 204);
}
`;