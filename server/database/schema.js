const mongoose = require("mongoose");
//todo: Add more schemas and perform validations

const petSchema = new mongoose.Schema({
  pet_type: {
    type: String,
    required: true,
  },
  pet_name: {
    type: String,
    required: true,
  },
});

const petOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  pet: petSchema,
});

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const models = [
  mongoose.model("pet owner", petOwnerSchema),
  mongoose.model("admin", adminSchema),
  //Add more models then export as a list
];

module.exports = models;
