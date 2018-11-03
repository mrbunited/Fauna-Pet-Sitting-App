const db = require("../models");

// Defining methods for the petSittersController
module.exports = {
  findAll: function(req, res) {
    db.PetSitter
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.PetSitter
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAnimal: function(req,res) {
    db.PetSitter
    .find({})
    .where('petExpertise').in([req.body.petExpertise])
    .then(dbModels => res.json(dbModels))
  },
  create: function(req, res) {
    console.log("In Create -------- ", req.body);
    db.PetSitter
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.PetSitter
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.PetSitter
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
