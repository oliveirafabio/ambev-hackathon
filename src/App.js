import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      response: ''
    }
  }

  componentWillMount(){

    fetch('http://example.com/movies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      this.setState({
        response: myJson
      })
    });


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ambev</h1>
        </header>
        <div>
          {this.state.response}
        </div>

        <div>

        </div>
      </div>
    );
  }
}

export default App;
