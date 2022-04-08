import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const bannedPetowner = new mongoose.Schema({
  admin_id: {
    type: ObjectId,
    required: [true, "Admin id missing"],
  },
  email: {
    type: String,
    required: [true, "Email missing"],
    maxlength: 255,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "invalid email",
    ],
  },
  phone: {
    type: String,
    required: [true, "Phone number missing"],
    match: [/^((0))(3)([0-9]{9})$/, "invalid phone number"], //03XXXXXXXXX
  },
  reason: {
    type: String,
    required: false,
    maxlength: 255,
  },
});

export const bannedPetOwnersModel = mongoose.model(
  "banned petowner",
  bannedPetowner
);
