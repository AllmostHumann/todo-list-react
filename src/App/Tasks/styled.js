import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: auto;
    background-color: rgb(255, 255, 255);
`;

export const Item = styled.li`
    border-bottom: 2px solid rgb(221, 221, 221);
    padding: 5px;
    display: grid;
    grid-template-columns: 25px 1fr 25px;
    align-items: center;
    grid-gap: 10px;
    
    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    ${({ type }) => type === "done" && css`
    text-decoration: line-through;
`}
`;

export const Button = styled.button`
    color: rgb(255, 255, 255);
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: 1s;

    ${({ type }) => type === "done" && css`
    background-color: rgb(0, 128, 0);

    &:hover {
    background-color: hsl(101, 99%, 36%);
      }
    `}

    ${({ type }) => type === "remove" && css`
    background-color: rgb(255, 0, 0);

    &:hover {
    background-color: rgb(255, 70, 70);
    }
    `}  
`;