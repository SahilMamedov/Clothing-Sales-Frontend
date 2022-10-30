//import styled from "styled-components";
// import { CaretDown, SlidersHorizontal } from "phosphor-react";

// export const StyledContainer = styled.div`
//   background-color: #f5f5f5;
//   padding: 0 50px;
// `;
// export const StyledWrapper = styled.div`
//   display: flex;
//   justify-content: end;
// `;

// export const StyledFilers = styled.h4`
//   color: #848484;
//   font-weight: ${({ theme }) => theme.fontWeight.bold};
//   font-size: ${({ theme }) => theme.fontSize.medium};
//   line-height: ${({ theme }) => theme.lineHeight.medium};
// `;

// export const StyledFilerIcon = styled(SlidersHorizontal)`
//   font-size: 16px;
//   color: #848484;
//   margin-left: 15px;
// `;

// export const StyledSort = styled.h4`
//   color: #272727;
//   font-weight: ${({ theme }) => theme.fontWeight.bold};
//   font-size: ${({ theme }) => theme.fontSize.medium};
//   line-height: ${({ theme }) => theme.lineHeight.medium};
//   margin-left: 30px;
// `;
// export const StyledCaretDown = styled(CaretDown)`
//   font-size: 16px;
//   color: #272727;
//   margin-left: 7px;
// `;
// export const StyledRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;
// export const StyledItem = styled.div`
//   margin-right: 40px;
//   margin-bottom: 40px;
// `;
// export const StyledIsLoading = styled.div`
//   display: flex;
//   justify-content: center;
// `;

import styled from "styled-components";
import { CaretDown, CaretUp } from "phosphor-react";
import Box from "@mui/joy/Box";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #f5f5f5;
 
  position: relative;
`;
export const Wrapper=styled.div`
 display: flex;
 padding: 50px 40px;
`
export const StyledPagination=styled.div`
padding-bottom: 15px;
display: flex;
justify-content: center;
`

export const SideBar = styled.div`
  width: 400px;
  border: 1px solid #f0f0f0;
  color: white;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  
`;
export const Line = styled.span`
  border: 1px solid #f0f0f0;
  margin-top: 10px;
  display: flex;
  width: 380px;
`;
export const SideBarBox = styled.div`
  padding-left: 20px;
`;

export const SideBarTitle = styled.h1`
  color: ${({ theme }) => theme.color.CharlestonGreen};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 45px;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  color: blueviolet;
`;

export const PriceValue = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 24px;
  margin-right: 60px;
`;
export const Value = styled.span`
  color: crimson;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
  border: 1px solid lightskyblue;
`;
export const OpenIcon = styled(CaretDown)`
  font-size: 20px;
  padding-right: 20px;
`;

export const CloseIcon = styled(CaretUp)`
  font-size: 20px;
  padding-right: 20px;
`;

export const Goodsbox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const WrapperCard = styled.div`
  margin-left: 30px;
  margin-top: 30px;
`;

export const StyledBox = styled(Box)`
  color: black;
`;
export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
`;

export const Loading = styled.div`
  position: absolute;
  display: flex;
  top: 100px;
  width: 100%;
  justify-content: center;
`;
