import styled from "styled-components";

export const StyledMain = styled.main`
  background: #f5f5f5;
`;
export const Container = styled.div`
  padding: 0px 50px 0px 50px;
`;
export const StyledTrending = styled.p`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  line-height: 45px;
`;
export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFeaturedBlogs = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  line-height: 45px;
`;
