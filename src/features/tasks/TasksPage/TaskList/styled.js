import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0; 
  padding: 0; 
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px; 
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey}; 

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Button = styled.button`
  border: none; 
  color: ${({ theme }) => theme.color.white}; 
  font-size: 22px;
  width: 30px; 
  height: 30px; 
  padding: 0; 
  transition: filter 0.3s;

   ${({ toggleDone }) => toggleDone && css`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.deepSkyBlue}; 
  `} 

  ${({ remove }) => remove && css`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.crimson};
  `}

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Content = styled.span`
  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;
// _____________________________________________________
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  
  &:hover {
    border-bottom: 1px solid;
  }
  `;
  // _____________________________________________________