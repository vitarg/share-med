import React from "react";
import Header from "./header";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import Main from "../pages/main";
import OneMedication from "../pages/one-medication";
import AddRequest from "../pages/add-request";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/medications/categories/:id">
          <Main />
        </Route>
        <Route path="/medications/:id">
          <OneMedication />
        </Route>
        <Route path="/requests/:medicationId">
          <AddRequest />
        </Route>
        <Route path={"/sign-in"}>
          <SignIn />
        </Route>
        <Route path={"/sign-up"}>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
