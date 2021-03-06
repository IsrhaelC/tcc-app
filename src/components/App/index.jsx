import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "../../pages/Container";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import PetDetail from "../../pages/PetDetail";

import './styles.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/login"} exact component={Container} />
        <Route path={"/search"} exact component={Search} />
        <Route path={"/pet/:id"} exact component={PetDetail} />
      </Switch>
    );
  }
}

export default App;
