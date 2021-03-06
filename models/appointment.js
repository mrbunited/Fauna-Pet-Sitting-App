const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  customerId: { type: String, required: true },
  petSitterId: { type: String, required: true },
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  petsToBeServiced: [],
  serviceNotes: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;