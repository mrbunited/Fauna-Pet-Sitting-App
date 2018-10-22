const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: {
      street: {type: String, required: true},
      city: {type: String, required: true},
      state: {type: String, required: true},
      zip: {type: String, required: true}, 
  },
  phone: {type: String, required: true},
  email: {type: String, required: true},
  emergencyContact: {
    vetHospital: {type: String, required: true},
    vetDocName: {type: String, required: true},
    vetPhone: {type: String, required: true},
  },
  pets: [],
  date: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;