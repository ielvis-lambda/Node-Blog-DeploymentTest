import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:9000/api/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <div className="App">HELLOOOOOOOO</div>;
  }
}

export default App;
