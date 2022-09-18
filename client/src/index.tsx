// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

// relevant modules and files
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, Persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// styles
import "./index.scss";

// building block
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
