import React, {Component} from 'react';

import _ from 'lodash';

import './CarsList.css';
import Car from './Car';


const CarsList = ( { cars = [] } ) => {
    var sortedCars = _.chain(cars)
        .sortBy('name', a => a.availability === "In Dealership" ? -1 : 0)
        .value();

    return ( 
        <div className="cars-list">
            {
                sortedCars.map( (car,i) => <Car key={i} car={car} />)
            }
        </div>
    );
}

export default CarsList
