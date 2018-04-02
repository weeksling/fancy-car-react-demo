import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CarsList from './CarsList/CarsList';

// import apiData from './api/db.json';
// var cars = apiData.cars;

class App extends Component {
  state = {}

  componentDidMount() {
    console.log('fetch cars')
    return fetch('http://localhost:3001/cars')
      .then ( response => response.json())
      .then ( cars => {
        console.log(cars)
        this.setState({cars})
      })
      .catch( error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FancyCars.ca</h1>
        </header> */}
        <CarsList cars={this.state.cars}/>
      </div>
    );
  }
}

export default App;
