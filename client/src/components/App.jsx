import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, } from "react-router-dom"
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
  <BrowserRouter>
    <Sidebar />
      <Switch>
      <Route path="/" exact></Route>
        <Route path="/medications/categories/:id"></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
