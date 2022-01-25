import styled from "styled-components";

export default styled.input`
  padding: 20px; 
  border: 1px solid ${({ theme }) => theme.color.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax360}px) {
    width: 75vw;
    font-size: 14px;
    text-align: center;
  }
`;