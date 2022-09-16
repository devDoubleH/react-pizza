import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Korzinka from "./korzinka";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/korzinka" element={<Korzinka />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
