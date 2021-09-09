import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/medications/categories/:id"></Route>
        <Route path={"/sign-in"}>
          <SignInPage/>
        </Route>
        <Route path={"/sign-up"}>
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
