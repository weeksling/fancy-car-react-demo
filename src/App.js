import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CarsList from './CarsList/CarsList';

import apiData from './api/db.json';
var cars = apiData.cars;

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FancyCars.ca</h1>
        </header>
        <CarsList cars={cars}/>
      </div>
    );
  }
}

export default App;
