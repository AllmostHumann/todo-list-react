import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
@media (max-width: 767px) {
        flex-basis: auto;
        margin: 5px;
        justify-content: center;
};
`;

export const Button = styled.button`
    border: none;
    background-color: hsl(0, 0%, 100%);
    color: teal;
    margin: 0 10px 0 10px;
    transition: color 0.5s;
@media (max-width: 767px) {
        margin: 5px;
};

&:hover {
    color: hsla(180, 100%, 25%, 0.822);
}
&:disabled {
    color: hsl(0, 0%, 80%);
}
`;