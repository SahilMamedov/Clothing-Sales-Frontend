import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import { Links } from "./Links";
import { Men } from "../Views/Men";
import { Women } from "../Views/Women";
import { Kids } from "../Views/Kids";
import { Shop } from "../Views/Shop";
import { Contact } from "../Views/Contact";
import { Home } from "../Views/Home";
import { ProductDetail } from "../Views/ProductDetail/ProductDetail";
import Register from "Views/Auth/Register";
import Login from "Views/Auth/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.app.home} element={<AppLayout />}>
          <Route path={Links.app.home} element={<Home />} />
          <Route path={Links.app.men} element={<Men />} />
          <Route path={Links.app.women} element={<Women />} />
          <Route path={Links.app.kids} element={<Login />} />
          <Route path={Links.app.shop} element={<Shop />} />
          <Route path={Links.app.contact} element={<Register />} />
          <Route path={Links.app.register} element={<Register />} />
          <Route path={Links.app.login} element={<Login />} />
          <Route path={Links.app.productDetail} element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
