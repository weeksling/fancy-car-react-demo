import React, { Component } from 'react';
import './App.css';

import CarsList from './CarsList/CarsList';

// import apiData from './api/db.json';
// var cars = apiData.cars;

function fetchAvailability (car) {
  const url = `http://localhost:3001/availability?id=${car.id}`;

  console.log(url)
  return fetch(url)
    .then (res => {
      return res.json()
    })
    .then (json => json[0]);
}

function fetchCars () {
  return fetch('http://localhost:3001/cars')
    .then (res => res.json())
}

class App extends Component {
  state = {}

  componentDidMount() {
    return fetchCars()
      .then ( cars => {
        var joinPromises = cars.map( car => {
          return fetchAvailability(car) 
            .then(availability => {
              if (!availability) {
                console.error('Missing availability for ', car);
                return {...car}
              }
              return {
                ...car,
                availability: availability.availability
              }
            })
        })

        return Promise.all(joinPromises)
      })
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
        <header className="App-header">
          <h1 className="App-title">Welcome to FancyCars.ca</h1>
        </header>
        <CarsList cars={this.state.cars}/>
      </div>
    );
  }
}

export default App;
