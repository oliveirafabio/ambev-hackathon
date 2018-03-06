import React, { Component } from 'react';
import Goals from './components/Goals'
import Header from './components/Header'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          Bem vindo!
        </div>
      </div>
    );
  }
}

export default App;
