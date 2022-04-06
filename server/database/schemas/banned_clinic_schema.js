import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const bannedClinic = new mongoose.Schema({
  admin_id: {
    type: ObjectId,
    required: [true, "Admin id missing"],
  },
  cnic: {
    type: String,
    required: true,
    match: [
      /[0-9]{13}$/,
      "invalid cnic entered, enter 13 digit cnic without dashes",
    ], //03XXXXXXXXX
  },
  email: {
    type: String,
    required: [true, "Email missing"],
    maxlength: 255,
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number missing"],
    match: [/^((0))(3)([0-9]{9})$/, "invalid phone number"], //03XXXXXXXXX
  },
  reg_num: {
    type: String,
    required: [true, "Registration number missing"],
    maxlength: [30, "Registration number too long"],
  },
  reason: {
    type: String,
    required: false,
    maxlength: 255,
  },
});

export const banned_clinic_model = mongoose.model(
  "banned clinic",
  bannedClinic
);
