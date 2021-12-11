const express = require('express');
const router = express.Router();

const Auto = require('../models/auto');


router.get('/autos', function (req, res) {
    Auto.find()
        .then(function (autos) {
            res.send(autos);
        })

});

router.get('/autos/:id', function (req, res) {
    Auto.findOne({ _id: req.params.id })
        .then(function (auto) {
            res.send(auto);
        });
});

router.post('/autos', function (req, res) {
    Auto.create(req.body).then(function (auto) {
        res.send(auto);
    });
})

router.put('/autos/:id', function (req, res) {
    Auto.findOneAndUpdate({ _placa: req.params.id }, req.body).then(function (auto) {
        //Aquí ya se actualizo, pero vamos a reotrnar el nuevo elemento ya editado   
        Auto.findOne({ _placa: req.params.id }).then(function (auto) {
            res.send(auto);
        })
    });
});

router.delete('/autos/:id', function (req, res) {
    Auto.findOneAndDelete({ _placa: req.params.id }).then(function (auto) {
        res.send(auto);
    });
});

module.exports = router;