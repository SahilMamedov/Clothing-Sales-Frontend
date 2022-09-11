import { Button, styled as MuiStyled } from "@mui/material";
import styled from "styled-components";

export const StyledDisplayFlex = styled.div`
  display: flex !important;
`;
export const StyledSliderImg = styled.img`
  width: 960px;
  height: 700px;
`;

export const Arrow = styled.div`
  background: chocolate;
  padding: 10px;
  margin-right: 30px;
  border-radius: 50%;
  &:hover {
    background: cornflowerblue;
  }
`;
export const StyledSliderContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 200px;
  left: 200px;
`;

export const StyledPosition = styled.div`
  position: relative;
`;
export const StyledSliderTitle = styled.span`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.big}
  margin-top: 40px;
  color: #565656;
`;
export const StyledPercentOff = styled.span`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.big}
  margin-top: 10px;

  color: #565656;
`;
export const StyledSliderButton = MuiStyled(Button)`
  color: #272727;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  line-height: 30px;
  border: solid 2px #272727;
  height: 36px;
  width: 130px;
`;
export const StyledZaraLogo = styled.img`
  height: 83px;
`;
