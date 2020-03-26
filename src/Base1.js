// src/App.js

import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import Base from "./Base"
import User from "./User"

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Base} />
                    <Route path="/battle" component={User} />
                </Switch>
            </div>
        );
    }
}

export default App;