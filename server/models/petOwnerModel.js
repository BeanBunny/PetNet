import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
//todo: Add more schemas and perform validations

const petSchema = new mongoose.Schema({
  pet_type: {
    type: String,
    required: [true, "pet type missing"],
    trim: true,
    maxlength: 20,
  },
  pet_name: {
    type: String,
    required: [true, "pet name missing"],
    trim: true,
    maxlength: [20, "pet name too long"],
  },
});

const petOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name missing"],
    trim: true,
    maxlength: [30, "Name too long"],
  },
  phone: {
    type: String,
    required: [true, "Phone number missing"],
    match: [/^((0))(3)([0-9]{9})$/, "invalid phone number"], //03XXXXXXXXX
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email missing"], //todo:validate
    maxlength: 255,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "invalid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Password missing"], //todo:validate
  },
  pet: {
    type: [petSchema],
    validate: [petLimit, "Pets can not be more than 5"],
  },
  location: {
    type: Object,
    required: true,
  },
});

function petLimit(val) {
  return val.length <= 5;
}
export const petOwnerModel = mongoose.model("pet owner", petOwnerSchema);
