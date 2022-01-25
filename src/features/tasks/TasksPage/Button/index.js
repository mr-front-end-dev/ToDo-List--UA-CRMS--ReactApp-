import styled from "styled-components";

export default styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.deepSkyBlue};
  border: none;
  margin: 0 0 0 20px;
  border-bottom: 1px solid transparent;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax414}px) {
      flex-basis: 100%;
      margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.lightSlateGrey}
  }
`;