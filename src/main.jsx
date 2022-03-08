import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Error404 from "./components/Error404";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
