import React from "react";
import { Provider } from "react-redux";
import Gestores from "./components/Gestores";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Gestores></Gestores>
    </Provider>
  );
};
