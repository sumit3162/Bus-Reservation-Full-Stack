const router = require('express').Router();
let Bus = require('../models/bus.model');

router.route('/').get((req, res) => {
  Bus.find()
    .then(buses => res.json(buses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const busName = req.body.busName;
  const from = req.body.from;
  const to = req.body.to;
  const date = Date.parse(req.body.date);
  const seats = Number(req.body.seats);
  const driverName = req.body.driverName;
  const driverContact = req.body.driverContact;
  const busType = req.body.busType;

  const newBus = new Bus({
    busName,
    from,
    to,
    date,
    seats,
    driverName,
    driverContact,
    busType,
  });

  newBus.save()
    .then(() => res.json('Bus added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
