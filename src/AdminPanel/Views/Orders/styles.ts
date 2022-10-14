import styled from "styled-components";

export const StyledBox=styled.div`
width: 1495px;
display: flex;
justify-content: center;
margin: 30px 0px;
`
export  const Image=styled.img`
width: 80px;
height: 60px;
`
export const StyledOrderStatus=styled.div.attrs(
    (props: { background: string }) => props
  )`

background-color: ${(props) => props.background};
padding: 15px 0px;
width:100px;
display: flex;
color: white;
font-size: 20px;
justify-content: center;
`
export const StyledReject=styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
&:hover{
    background-color: red;
    cursor: pointer;
    color:white;
}
`
export const StyledSuccess=styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    background-color: green;
    cursor: pointer;
    color:white;
}
`
export const ViewButton=styled.button`
background-color: #133f59;
border-radius: 6px;
border: none;
padding: 14px 18px;
color: white;
font-size: 18px;
cursor: pointer;
`
export const OrderItemBox=styled.div`
width: 1000px;
`