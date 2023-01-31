import styled from "styled-components";

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