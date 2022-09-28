import styled from "styled-components";
import { CaretDown, SlidersHorizontal } from "phosphor-react";

export const StyledContainer = styled.div`
  background-color: #f5f5f5;
  padding: 0 50px;
`;
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledFilers = styled.h4`
  color: #848484;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

export const StyledFilerIcon = styled(SlidersHorizontal)`
  font-size: 16px;
  color: #848484;
  margin-left: 15px;
`;

export const StyledSort = styled.h4`
  color: #272727;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  margin-left: 30px;
`;
export const StyledCaretDown = styled(CaretDown)`
  font-size: 16px;
  color: #272727;
  margin-left: 7px;
`;
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledItem = styled.div`
  margin-right: 40px;
  margin-bottom: 40px;
`;
export const StyledIsLoading = styled.div`
  display: flex;
  justify-content: center;
`;
