// src/App.js

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
      <div>
        <Route path="/" component={Base} />
        <Route path="/battle" component={User} />
      </div>
    );
  }
}

export default App;