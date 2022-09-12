import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SeeAll from "./pages/SeeAll";
import Create from "./pages/Create";
import Modify from "./pages/Modify";
import Delete from "./pages/Delete";
import SeeObject from "./pages/SeeSingleObject";
import Error from "./pages/Error";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/seeAll" element={<SeeAll />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/modify" element={<Modify />}></Route>
      <Route path="/delete" element={<Delete />}></Route>
      <Route path="/seeObject" element={<SeeObject />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
