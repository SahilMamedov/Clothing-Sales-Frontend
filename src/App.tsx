import React from "react";
import Theme from "./Them/them";
import { AppRoutes } from "./Routes/routes";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <AppRoutes />
        </Theme>
      </Provider>
    </>
  );
}

export default App;
