import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.color.white};  
  box-shadow: 0 0 30px ${({ theme }) => theme.color.lightGrey}; 
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey}; 
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px; 

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax414}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  padding: 10px;
  color: ${({ theme }) => theme.color.deepSkyBlue};
  font-size: 30px;
  margin: 0;
  text-align: left;
`;

export const Body = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.lightSlateGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax360}px) {
    padding: 15px;
  }
`;