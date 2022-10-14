import Dialog from "@mui/material/Dialog"
import styled from "styled-components"

export const DialogBox=styled(Dialog)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledBtn=styled.button`
  background-color: #D3232F;
  padding: 4px 16px ;
  color: white;
  border-radius: 6px;
  border: none;
  width: 120px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 0.875rem;
  height: 40px;
cursor: pointer;
&:hover{
  background-color: #A10E25;;
}
`
export const StyledBox=styled.div`
width: 420px;
border-radius: 16px;
border-radius: 16px;
`
export const Confirmation =styled.div`
  margin: 15px;
`
export const CancelBtn=styled.button`
width: 70px;
height: 40px;
border-radius: 6px;
cursor: pointer;
border: none;
color: black;
background-color: white;
&:hover{
  background-color:#eeeff0;
}
`