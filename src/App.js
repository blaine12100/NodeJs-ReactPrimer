// src/App.js
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import React from "react";
import {
  Route,
} from "react-router-dom";
import Base from "../src/Base"
import User from "../src/User"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>
      
        <Route path="/" component={Base} exact={true} />
        <Route path="/battle" component={User} />
      
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
