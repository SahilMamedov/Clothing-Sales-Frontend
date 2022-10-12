import { AppLayout } from 'AdminPanel/Layouts/AppLayout'
import { Orders } from 'AdminPanel/Views/Orders'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from '../Views/Login'
import { AppLinks } from './AppLinks'

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={AppLinks.base} element={<AppLayout/>}>
         <Route path={AppLinks.orders} element={<Orders/>}/>

        </Route>
        <Route path={AppLinks.login} element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}


