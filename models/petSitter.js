const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSitterSchema = new Schema({
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
  petExpertise: [],
  certifications: {
      bonded: {type: Boolean, required: true}, 
      insured: {type: Boolean, required: true},
      psiCertified: {type: Boolean, required: true},
  },
  payRate:{type: String, required: true},
  availability: [],
  date: { type: Date, default: Date.now }
});

const PetSitter = mongoose.model("PetSitter", petSitterSchema);

module.exports = PetSitter;