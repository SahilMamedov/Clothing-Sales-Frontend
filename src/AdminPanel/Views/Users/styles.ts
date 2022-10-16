import { Button } from "@mantine/core";
import styled from "styled-components";

export const DeletButtonBox=styled.div`
width: 55px;
height: 40px;
border: none;
border-radius: 4px;
background-color: #A8CBCA;
display: flex;
align-items: center;
justify-content: center;

`
export const StyledBox=styled.div`
margin-bottom: 20px;
margin-right: 20px;
`

export const Flex=styled.div`
display: flex;
`
export const StyledRoleDelet=styled.div`
margin-top: 10px;
`
export const DeletButton=styled(Button)`
&:hover{
    background-color: #DA7423;
}
`