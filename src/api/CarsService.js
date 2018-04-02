const data = require('./db.json');
const cars = data.cars;


module.exports.getAll = function () {
    return Promise.resolve(cars)
}