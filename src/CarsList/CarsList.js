import React from 'react';

import './CarsList.css';
import Car from './Car';

const CarsList = ( { cars = [] } ) => {
    return (
        <div className="cars-list">
            {
                cars.map( (car,i) => <Car key={i} car={car} />)
            }
        </div>
    );
}

export default CarsList;
