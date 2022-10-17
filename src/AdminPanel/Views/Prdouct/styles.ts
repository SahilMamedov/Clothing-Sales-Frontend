import  TextField  from '@mui/material/TextField';
import styled from "styled-components";

export const StyledButton=styled.button`
padding: 15px 40px;
border-radius: 6px;
border: none;
cursor: pointer;
background-color: #1d2a57;
color: white;
font-size: 16px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
`
export const IsLoading=styled.div`
width: 107.609px;
height: 18px;

`
export const StyledTextField=styled(TextField).attrs(
    (props: { width: string }) => props
  )`
width: ${(props) => props.width};

`
export const FileBox=styled.div`
width: 200px;

`

export const EditButton=styled.button`
width: 50px;
height: 40px;
border-radius: 6px;
border: none;
font-size: 16px;
cursor: pointer;
background-color: coral;
color: white;

`
export const DeletButton=styled.div`
padding: 0 8px;
height: 40px;
border-radius: 6px;
border: none;
cursor: pointer;
background-color:rgba(162, 172, 218, 0.849);
font-size: 16px;
&:hover{
  background-color: #BEC9D0;
}
`
export const ProductImages=styled.div`
display: flex;
width: 700px;
`
export const Images=styled.img`
height: 90px;
width: 100px;
border-radius: 4px;
margin: 0px 7px;

`