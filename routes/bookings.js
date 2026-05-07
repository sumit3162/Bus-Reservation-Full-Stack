const router = require('express').Router();
let Booking = require('../models/booking.model');

router.route('/').get((req, res) => {
  Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const user = req.body.user;
  const bus = req.body.bus;
  const seats = Number(req.body.seats);

  const newBooking = new Booking({
    user,
    bus,
    seats,
  });

  newBooking.save()
    .then(() => res.json('Booking added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
