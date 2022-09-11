import styled from "styled-components";

export const StyledCustomerTitle = styled.h1`
  color: ${({ theme }) => theme.color.CharlestonGreen};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledCustomerFeedback = styled.div`
  width: 500px;
  height: 350px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  padding: 0 25px;
  margin: 0 20px;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
export const StyledCustomerPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-bottom: 20px;
`;
export const StyledCustomerText = styled.p`
  margin-top: 20px;
`;
