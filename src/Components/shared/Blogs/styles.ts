import styled from "styled-components";

export const StyledBlogBox = styled.div`
  width: 580px;
  height: 300px;
  display: flex;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 100px;
  margin-left: 20px;
`;
export const StyledBlogImg = styled.img`
  width: 320px;
  border-radius: 10px 0px;
`;
export const StyledBlogInformation = styled.div`
  padding: 27px 32px;
  display: flex;
  flex-direction: column;
  width: 170px;
`;

export const StyledBlogName = styled.span`
  color: #848484;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  padding-bottom: 18px;
`;
export const StyledBlogTitle = styled.span`
  color: #27363b;
  font-size: 20px;

  line-height: 25px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: 18px;
`;
export const StyledBlogDesc = styled.p`
  margin: 0;
  color: #848484;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;
