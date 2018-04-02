const express = require('express');
const cors = require('cors');

const CarsService = require ('./api/CarsService');
const AvailabilityService = require('./api/AvailabilityService');

const app = express ();

app.use(cors())

app.get('/cars', function (req, res) {
    CarsService.getAll()
        .then(data => {
            res.send(data)
        })
}) 

app.get('/availability', function (req, res) {
    var id = req.query.id;

    AvailabilityService.getById(id)
        .then(data => {
            res.send(data)
        })
})


app.listen(3001)