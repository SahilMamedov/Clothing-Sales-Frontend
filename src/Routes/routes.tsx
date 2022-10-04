import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import { Links } from "./Links";
import { Category } from "../Views/Category";
import { Shop } from "../Views/Shop";
import { Contact } from "../Views/Contact";
import { Home } from "../Views/Home";
import { ProductDetail } from "../Views/ProductDetail/ProductDetail";
import Register from "Views/Auth/Register";
import Login from "Views/Auth/Login";
import { Basket } from "../Views/Basket";
import {Checkout} from "../Views/Basket/Checkout/Checkout"
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.app.home} element={<AppLayout />}>
          <Route path={Links.app.home} element={<Home />} />
          <Route
            path={`${Links.app.category}/:category`}
            element={<Category />}
          />

          <Route path={Links.app.shop} element={<Shop />} />
          <Route path={Links.app.contact} element={<Contact />} />
          <Route path={Links.app.register} element={<Register />} />
          <Route path={Links.app.login} element={<Login />} />
          <Route path={Links.app.productDetail} element={<ProductDetail />} />
          <Route path={Links.app.basket} element={<Basket/>}/>
          <Route path={Links.app.checkout} element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
