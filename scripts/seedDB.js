const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/fauna_db"
);

const petSitterSeed = [
  {
    first_name: "Jane",
    last_name: "Smith",
    address: {
        street: "431 S. Dearborn St., Apt. #401",
        city: "Chicago",
        state: "IL",
        zip: "60605", 
    },
    phone: "773.123.4567",
    email: "j@s.com",
    petExpertise: ["rabbit", "ferret", "hamster", "guinea pig"],
    certifications: {
        bonded: true, 
        insured: true,
        psiCertified: true,
    },
    payRate:"$20.00/day",
    availability: ["11/2/18", "11/3/18", "11/4/18"],
    date: { type: Date, default: Date.now }
  },
  {
    first_name: "Tim",
    last_name: "Johnson",
    address: {
        street: "1529 S. State St., Apt. 8-D",
        city: "Chicago",
        state: "IL",
        zip: "60605", 
    },
    phone: "773.777.9311",
    email: "t@j.com",
    petExpertise: ["turtle", "cat", "hamster", "tarantula"],
    certifications: {
        bonded: true, 
        insured: true,
        psiCertified: false,
    },
    payRate:"$25.00/day",
    availability: ["11/3/18", "11/4/18", "11/5/18", "11/6/18"],
    date: { type: Date, default: Date.now }
  },
  {
    first_name: "Debra",
    last_name: "Brown",
    address: {
        street: "680 S. Federal St., Apt. #709",
        city: "Chicago",
        state: "IL",
        zip: "60605", 
    },
    phone: "773.123.4567",
    email: "d@b.com",
    petExpertise: ["bird", "lizard", "hamster", "rabbit", "fish"],
    certifications: {
        bonded: false, 
        insured: true,
        psiCertified: false,
    },
    payRate:"$20.00/day",
    availability: ["11/6/18", "11/7/18", "11/8/18", "11/9/18"],
    date: { type: Date, default: Date.now }
  },
  {
    first_name: "Joseph",
    last_name: "White",
    address: {
        street: " 780 S. Federal St., Apt. #1003",
        city: "Chicago",
        state: "IL",
        zip: "60605", 
    },
    phone: "312.588.2300",
    email: "j@w.com",
    petExpertise: ["cat", "dog", "snake", "lizard", "bird"],
    certifications: {
        bonded: false, 
        insured: true,
        psiCertified: true,
    },
    payRate:"$30.00/day",
    availability: ["11/2/18", "11/3/18", "11/4/18"],
    date: { type: Date, default: Date.now }
  },
  {
    first_name: "Angela",
    last_name: "Green",
    address: {
        street: "899 S. Plymouth Ct., Apt. #400",
        city: "Chicago",
        state: "IL",
        zip: "60605", 
    },
    phone: "312.987.6543",
    email: "a@g.com",
    petExpertise: ["dog", "cat", "fish", "rabbit", "snake", "tarantula", "turtle", "lizard", "frog"],
    certifications: {
        bonded: false, 
        insured: false,
        psiCertified: false,
    },
    payRate:"$20.00/day",
    availability: ["11/5/18", "11/6/18", "11/7/18", "11/8/18", "11/9/18"],
    date: { type: Date, default: Date.now }
  }
];

db.PetSitter
  .remove({})
  .then(() => db.PetSitter.collection.insertMany(petSitterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
