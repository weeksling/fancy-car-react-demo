const lodash = require('lodash');
const data = require('./db.json')
const availability = data.availability;

module.exports.getById = (id) => {
    return Promise.resolve(lodash.filter(availability, {'id':id} ))
}