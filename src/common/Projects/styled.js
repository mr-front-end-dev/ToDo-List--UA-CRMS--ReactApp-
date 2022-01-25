import styled, { css } from "styled-components";

export const Links = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 20px;
  cursor: context-menu;
`;

export const Link = styled.a`
  cursor: context-menu;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 8px;
  cursor: context-menu;
  border-style: none;
  background-color: ${({ theme }) => theme.color.crimson};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  ${({ deepSkyBlue }) => deepSkyBlue && css`
    background-color: ${({ theme }) => theme.color.deepSkyBlue};
    color: ${({ theme }) => theme.color.white};
  `}

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

