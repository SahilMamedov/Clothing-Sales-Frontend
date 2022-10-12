import { DashboardContent } from 'AdminPanel/Components/Layouts/Header'
import { AppLinks } from 'AdminPanel/Routes/AppLinks'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
`;
const StyledOutlet = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  width: 100%;
`;
export const AppLayout = () => {

const token = localStorage.getItem("Admintoken")
const navigate=useNavigate()


useEffect(()=>{
 if(!token){
  navigate(AppLinks.login)
 }

},[navigate])

  return (
    <StyledFlex>
      <DashboardContent/>
      <StyledOutlet>
      <Outlet/>
      </StyledOutlet>
    </StyledFlex>
  )
}

