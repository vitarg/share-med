import React from "react";
import Header from "./header";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Index from "./pages/main";
import OneMedicationPage from "./pages/one-medication/OneMedicationPage";
import RequestPage from "./pages/RequestPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/medications/categories/:id">
          <Index />
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
