import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import './styles.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
      </Switch>
    );
  }
}

export default App;
