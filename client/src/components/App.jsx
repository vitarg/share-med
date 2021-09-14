import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/main/MainPage";
import OneMedicationPage from "./pages/one-medication/OneMedicationPage";
import RequestPage from "./pages/RequestPage";
import { useSelector } from "react-redux";

function App() {
  useSelector((state) => state.application.token);

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/medications/categories/:id">
          <MainPage />
        </Route>
        <Route path="/medications/:id">
          <OneMedicationPage />
        </Route>
        <Route path="/requests/:medicationId">
          <RequestPage />
        </Route>
        <Route path={"/sign-in"}>
          <SignInPage />
        </Route>
        <Route path={"/sign-up"}>
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
