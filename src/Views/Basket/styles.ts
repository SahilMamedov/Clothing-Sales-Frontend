import styled from "styled-components";

export const Container=styled.div`
padding: 50px 290px;
`
export const StyledTableImg=styled.img`
height: 80px;
width: 80px;
`
export const BasketBox=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const BasketImg=styled.img`
height: 500px;
width: 500px;

`
export const BasketText=styled.h1`
color:red;
margin-bottom: 0;
`
export const Flex=styled.div`
display: flex;
`

export const Box =styled.div`
width: 308px;
height: 240px;
border: 1px solid #e5e5e5;
margin-left: 20px;
display: flex;

flex-direction: column;
`
export const Cargo =styled.div`
display: flex;
flex-direction: column;
padding-top:10px;

`
export const CargoField = styled.div.attrs(
    (props: { fontSize: string,paddingButtom:string }) => props
  )`
 
font-size: ${(props) => props.fontSize};
color: #333;
font-weight: ${({ theme }) => theme.fontWeight.bold};
line-height: 15px;
padding-right: 10px;
padding-bottom:${(props) => props.paddingButtom};
text-align: right;
`;
export const TotalBox=styled.div`
padding-top: 15px;
background-color: #f6f6f6;;
`
export const ButtonBox=styled.div`
display: flex;
justify-content: center;
padding-top: 30px;
`



export const ConfrimButton=styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 180px;
border-radius: 8px;
background-color: #59b210;
color:white;
border: none;
font-size: 16px;
line-height: 18px;
font-weight: ${({ theme }) => theme.fontWeight.bold};
letter-spacing: 0.6px;
&:hover{
background-color: red;
cursor: pointer;
}


`
