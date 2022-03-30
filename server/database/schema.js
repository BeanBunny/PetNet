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
  },
  email: {
    type: String,
    required: [true, "Email missing"], //todo:validate
    maxlength: 255,
  },
  password: {
    type: String,
    required: [true, "Password missing"], //todo:validate
  },

  pet: petSchema,
});

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, //todo:validate
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

const appointmentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  petowner_id: {
    type: ObjectId,
    required: true,
  },
  pet_id: {
    type: ObjectId,
    required: true,
  },
  vet_id: {
    type: ObjectId,
    required: true,
  },
});

export const models = [
  mongoose.model("pet owner", petOwnerSchema),
  mongoose.model("admin", adminSchema),
  mongoose.model("appointment", appointmentSchema),
  //Add more models then export as a list
];
