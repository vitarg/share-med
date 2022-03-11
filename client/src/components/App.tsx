import React from "react";
import Header from "./header";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import Main from "../pages/main";
import OneMedication from "../pages/one-medication";
import AddRequest from "../pages/add-request";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/medications/categories/:id" element={<Main />} />
        <Route path="/medications/:id" element={<OneMedication />} />
        <Route path="/requests/:id" element={<AddRequest />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
