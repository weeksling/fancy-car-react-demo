import React from 'react';

const Car = ({ car }) => {
    let {
        name,
        make,
        model,
        availability,
        image
    } = car;
    
    return (
        <div className="cars-list__car">
            <img alt=""  className="cars-list__car__image"/>
            <h2 className="cars-list__car__name">{name}</h2>
            <p className="cars-list__car__make"><b>Make:</b>{make}</p>
            <p className="cars-list__car__make"><b>Model:</b>{model}</p>
            <p><i>{availability}</i></p>
            {
                availability==="In Dealership"
                ? <button>Buy Now</button>
                : null
            }
        </div>
    )
}

export default Car;
