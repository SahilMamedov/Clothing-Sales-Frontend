import styled from "styled-components";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const Container = styled.div`
  padding: 25px 60px;
  background: #f5f5f5;
  height: 1300px;
`;
export const ProductContainer = styled.div`
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

export const StyledSize = styled.div.attrs(
  (props: { bacground: string }) => props
)`
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border: 1px solid #bababa;
  border-radius: 100%;
  margin-right: 19px;
  background-color: ${(props) => props.bacground};
  cursor: pointer;
  //&:hover {
  //  background-color: deepskyblue;
  //}
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
  height: 817px;
`;
export const SliderImg = styled.img`
  width: 158px;
  height: 158px;
  cursor: pointer;
  border-radius: 10px;
`;
export const SliderBox = styled.div``;
export const IsMainImgBox = styled.div`
  margin-left: 30px;
`;

export const IsMainImg = styled.img`
  border-radius: 10px;
  width: 740px;
  height: 817px;
`;
export const WrapperColor = styled.div`
  display: flex;
  margin: 10px 0;
`;
// export const StyledReactImageMagnify = styled(ReactImageMagnify)`
//   height: 500px;
//   smallImage {
//     width: 300px;
//     height: 300px;
//   }
//   ,
//   largeImage {
//     width: 400px;
//     height: 400px;
//   }
// `;

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

export const DetailBox = styled(ProductContainer)`
  justify-content: space-around;
  border-bottom: 1px solid #848484;
`;

export const DetailTitle = styled(Select)`
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ProductDetails = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  color: #848484;
  border-bottom: 3px solid #002482;
  margin-bottom: 15px;
  line-height: ${({ theme }) => theme.lineHeight.small};
  cursor: pointer;
`;

export const ProductDetailWrapper = styled.div`
  padding-top: 80px;
  margin: 0 140px;
`;
export const DetailDesc = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

export const StyledTextField = styled(TextField)`
  width: 800px;
`;
export const CommentButton = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
export const CommentBox = styled.ul`
  margin-top: 30px;
  height: 200px;
`;
export const Comment = styled.li`
  margin: 10px 0px;
  font-size: 18px;
`;
