import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class Abc extends Component {

  constructor(props) {

    super(props);

    this.state = {

      externalData: null,

    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/search", (data, err) => {
      console.log("data is", data)

      this.setState({ "externalData": data })
    })
  }
}

function App() {
  console.log(this.state.externalData)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
