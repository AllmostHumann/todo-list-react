import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: auto;
    background-color: hsl(0, 0%, 100%);
`;

export const Item = styled.li`
    border-bottom: 2px solid hsl(0, 0%, 87%);
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
    ${({ done }) => done && css`
    text-decoration: line-through;
`}
`;

export const Button = styled.button`
    color: hsl(0, 0%, 100%);
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: 1s;

    ${({ type }) => type === "done" && css`
    background-color: hsl(120, 100%, 25%);

    &:hover {
    background-color: hsl(101, 99%, 36%);
    border: solid hsl(0, 0%, 0%);
      }
    `}

    ${({ type }) => type === "remove" && css`
    background-color: hsl(0, 100%, 50%);

    &:hover {
    background-color: hsl(0, 100%, 64%);
    border: solid hsl(0, 0%, 0%);
    }
    `}  
`;