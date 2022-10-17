import React from "react";
import Theme from "./Them/them";
import { AppRoutes } from "./Routes/routes";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { AppRoutesAdmin } from "AdminPanel/Routes/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <AppRoutes />
          <ToastContainer
          position="bottom-right"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     />
          <AppRoutesAdmin/>
        </Theme>
      </Provider>
    </>
  );
}

export default App;
