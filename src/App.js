import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import TopAppBar from "./TopAppBar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/TopAppBar" component={TopAppBar} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
