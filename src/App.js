import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dashboard: []
    }
  }

  componentWillMount(){

    fetch('http://www.mocky.io/v2/5a9dd4743000006f0023497a')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      this.setState({
        dashboard: myJson
      })
    }.bind(this));


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ambev</h1>
        </header>
        <div>
          <Dashboard valores={this.state.dashboard}/>
        </div>
      </div>
    );
  }
}

export default App;
