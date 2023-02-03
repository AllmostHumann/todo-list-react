import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0 auto;
background-color: hsl(0, 0%, 100%);
border:1px;
line-height: 1.5;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 25px;
    @media (max-width: 767px){
        font-size: 20px;
        margin: 3px;
    }
    `;

export const Header = styled.header`
    margin: 0 ;
    padding: 20px;
    background-color: hsl(0, 0%, 100%);
    border-bottom: solid 1px hsl(0, 0%, 85%);
    display: grid;
    grid-template-columns: auto auto ;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
    `;