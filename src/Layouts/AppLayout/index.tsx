import { Outlet } from "react-router-dom";
import { Header, Footer } from "Components";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
