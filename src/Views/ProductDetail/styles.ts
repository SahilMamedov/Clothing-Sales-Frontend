import styled from "styled-components";
import Slider from "react-slick";
import TextField from "@mui/material/TextField";
import { Textarea } from "@mantine/core";
import Button from "@mui/material/Button";
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';

export const Container = styled.div`
  padding: 25px 60px;
  background: #f5f5f5;
  height: 100%;
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
  color: red;
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
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  line-height: 45px;
  color: ${({ theme }) => theme.color.CharlestonGreen};
  margin: 0px;
`;

export const StyledBrandName = styled.h2`
  line-height: ${({ theme }) => theme.lineHeight.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
  (props: { background: string }) => props
)`
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border: 1px solid #bababa;
  border-radius: 100%;
  margin-right: 19px;
  background-color: ${(props) => props.background};
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
export const WrapperColor = styled.div.attrs(
  (props: { background: string }) => props
)`
  margin: 10px 0;
  font-weight: 700;
  background-color: ${(props) => props.background};
  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  color: white;
  font-size: 18px;
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

export const Loading = styled.div`
  position: absolute;
  display: flex;
  top: 100px;
  right: 70px;
  padding-top: 100px;
  width: 100%;
  justify-content: center;
`;

export const LoadingBox = styled.div`
  height: 200px;
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

export const StyledTextarea = styled(Textarea)`
  width: 600px;
`;

export const CommentButton = styled.div`
margin-top: 26px;
`;
export const CommentBox = styled.ul`
  margin-top: 30px;
`;
export const Comment = styled.li`
  margin: 10px 0px;
  font-size: 15px;
  list-style: none;
  height: 50px;
  width: 600px;
  color: darksalmon;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c2bdbd;
`;
export const AddComment=styled(Button)`
height: 63px;
`
export const UserName=styled.span`
font-size: 18px;
color:black;
`
export const Badge=styled.div`


`
export const BadgeBox=styled(Box)`
`
export const BadgeIconButton=styled(IconButton)``

export const JustifyBetween=styled.div`
display:flex;
width: 600px;
justify-content: space-between;
`

export const StyledNotification=styled.div`

display: flex;

justify-content: end;
`