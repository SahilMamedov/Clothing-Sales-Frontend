import { Chart } from 'AdminPanel/Components/Shared/Chart'
import { AppLayout } from 'AdminPanel/Layouts/AppLayout'
import { CategoryAndBrand } from 'AdminPanel/Views/CategoryAndBrand'
import { Orders } from 'AdminPanel/Views/Orders'
import { Product } from 'AdminPanel/Views/Prdouct'
import { Users } from 'AdminPanel/Views/Users'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from '../Views/Login'
import { AppLinks } from './AppLinks'

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={AppLinks.base} element={<AppLayout/>}>
        <Route path={AppLinks.dashboard} element={<Chart/>}/>
         <Route path={AppLinks.orders} element={<Orders/>}/>
         <Route path={AppLinks.product} element={<Product/>}/>
         <Route path={AppLinks.categoryAndBrand} element={<CategoryAndBrand/>}/>
         <Route path={AppLinks.users} element={<Users/>}/>

        </Route>
        <Route path={AppLinks.login} element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}


