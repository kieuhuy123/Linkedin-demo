import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//

import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
