import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  background: #f5f5f5;
  padding: 25px 60px;
  display: flex;
`;

export const WrapperImg = styled.div`
  display: flex;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 96px;
`;
export const StyledDiscountPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  margin: 0;
`;
export const StyledPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-decoration-line: line-through;
  margin: 0 15px;
  color: #848484;
  padding-top: 5px;
`;
export const StyledDiscount = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
  color: #0a8200;
  padding-top: 5px;
`;
export const ProductName = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 45px;
  color: ${({ theme }) => theme.color.CharlestonGreen};
  margin: 0px;
`;

export const StyledBrandName = styled.h2`
  line-height: ${({ theme }) => theme.lineHeight.medium};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  margin: 10px 0px;
`;
export const Select = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  margin: 5px 0px;
`;
export const Flex = styled.div`
  display: flex;
  margin: 10px 0px;
`;

export const StyledSize = styled.div`
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border: 1px solid #bababa;
  border-radius: 100%;
  margin-right: 19px;
  cursor: pointer;
  &:hover {
    background-color: deepskyblue;
  }
`;
export const WrapperSize = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const VerticalSlider = styled.div`
  width: 180px;
`;
export const StyledSlider = styled(Slider)`
  display: flex;
  flex-wrap: nowrap;
  height: 900px;
`;
export const SliderImg = styled.img`
  width: 175px;
  height: 175px;
  cursor: pointer;
  border-radius: 10px;
`;
export const SliderBox = styled.div``;
export const IsMainImgBox = styled.div`
  margin-left: 30px;
`;

export const IsMainImg = styled.img`
  height: 900px;
  border-radius: 10px;
  width: 837px;
`;
export const WrapperColor = styled.div`
  display: flex;
  margin: 10px 0;
`;

// export const Color = styled.div.attrs((props: { background: string }) => props)`
//   height: 30px;
//   width: 30px;
//   border-radius: 100%;
//   cursor: pointer;
//   margin-right: 5px;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   background-color: ${(props) => props.background};
// `;
export const Loading = styled.div`
  position: absolute;
  display: flex;
  top: 100px;
  right: 70px;
  padding-top: 100px;
  width: 100%;
  justify-content: center;
`;

export const Boxx = styled.div`
  height: 200px;
`;
export const ColorImg = styled.img`
  height: 74px;
  width: 74px;
  margin-right: 18px;
  cursor: pointer;
  border-radius: 5px;
`;
export const ContentBold = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

export const Content = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin-left: 5px;
`;

export const ContentLink = styled.span`
  color: #002482;
  cursor: pointer;
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;
export const ButtonBox = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
`;
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #002482;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 168px;
  height: 48px;
  cursor: pointer;
  color: white;
`;
