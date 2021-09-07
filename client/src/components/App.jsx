import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import MainPage from "./pages/MainPage";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/medications/categories/:id">
              <MainPage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
