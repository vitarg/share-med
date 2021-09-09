import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from "./pages/MainPage";
import { Grid } from "@material-ui/core";
import SinglePage from "./pages/SinglePage";
import RequestPage from './pages/RequestPage';

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

      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/medications/categories/:id">
              <MainPage />
            </Route>
            <Route path="/medications/:id">
              <SinglePage />
            </Route>
            <Route path="/requests/:medicationId">
              <RequestPage />
            </Route>
            <Route path="/great">
              Заявка успешно отправлена, ответ придет на почту
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
