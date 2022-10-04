import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Textarea } from "@mantine/core";
export const Container=styled.div`
padding: 50px 310px;
display: flex;

`

export const BillingDetails=styled.div`
border:1px solid #edeef5;
padding: 30px;
border-radius: 6px;
width: 748px;
height: 100%;
`
export const Title=styled.h2`
border-bottom: 1px solid #edeef5;
margin-bottom:12px;
padding-bottom: 12px;
font-weight: 600;
margin-top: 0px;
`
export const OrderDetails=styled.div`
padding: 30px;
margin-left: 30px;
border: 2px solid #233a95; 
width: 430px;
border-radius: 6px;
height: 100%;

`
export const StyledTextField=styled(TextField).attrs(
    (props: { width: string }) => props
  )`
width: ${(props) => props.width};
margin: 0 10px !important;
margin-bottom: 26px !important;
`
export const Flex=styled.div`
display: flex;
`

export const StyledTextarea = styled(Textarea)`
  width: 720px;
  margin: 0 10px !important;
`;
export const SubTitle=styled.div`
color:#c2c2d3;
border-bottom: 1px solid #edeef5;
font-size: 16px;
padding-bottom: 12px;
padding-top: 5px;
display: flex;
justify-content: space-between;
`

export const PrdouctName=styled.span`
font-size: 13px;;
padding-right: 1.25rem;

`
export const PrdouctPrice=styled.span`
font-size: 15px;
`
export const Justify=styled.div`
padding: 15px 0px;
display: flex;
border-bottom: 1px solid #edeef5;
justify-content: space-between;
`
export const Total=styled.span`
color: #71778e;
font-size: 15px;
font-weight: 600;
padding: 8px 8px;
`
export const TotalPrice=styled.span`
font-weight: 600;
color: #202435;
font-size: 20px;
`
export const PlaceOrder=styled.button`
padding: 0 20px;
width: 100%;
height: 48px;
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
margin-top: 20px;
cursor: pointer;
font-size: 18px;
color:white;
background-color: #ed174a;
&:hover{
    opacity: .6;
}
`