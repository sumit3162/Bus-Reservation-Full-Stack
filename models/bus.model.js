const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busSchema = new Schema({
  busName: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: Date, required: true },
  seats: { type: Number, required: true },
  driverName: { type: String, required: true },
  driverContact: { type: String, required: true },
  busType: { type: String, required: true },
}, {
  timestamps: true,
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
