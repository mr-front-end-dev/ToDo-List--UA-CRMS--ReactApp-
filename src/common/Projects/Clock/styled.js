import styled from "styled-components";

export const StyledClock = styled.div`
  text-align: right;
  font-family: monospace;
  color:${({ theme }) => theme.color.crimson};
  background-color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  padding: 20px;
`;