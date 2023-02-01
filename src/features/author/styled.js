import styled from "styled-components";

export const Title = styled.h2`
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

export const Section = styled.form`
    margin: 3px auto;
    background-color: hsl(0, 0%, 100%);
    padding: 10px;
    text-align: left;
    line-height: normal;
`;