const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  customerId: { type: String, required: true },
  petSitterId: { type: String, required: true },
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  service: {type: String, required: true},
  specialInstructions: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Customer", appointmentSchema);

module.exports = Appointment;