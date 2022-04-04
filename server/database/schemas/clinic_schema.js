import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
import { pvmc } from "./pvmc_schema.js";
import { services } from "./services_schema.js";

const clinicSchema = new mongoose.Schema({
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
    required: [true, "Email missing"], //todo:validate
    maxlength: 255,
  },
  password: {
    type: String,
    required: [true, "Password missing"], //todo:validate
  },

  phone: {
    type: String,
    required: [true, "Phone number missing"],
    match: [/^((0))(3)([0-9]{9})$/, "invalid phone number"], //03XXXXXXXXX
  },

  clinic_name: {
    type: String,
    required: [true, "Clinic name missing"],
    maxlength: [40, "Name to long"],
  },

  about_clinic: {
    type: String,
    required: false,
    maxlength: [16777215, "About too long"], //MEDIUMTEXT
  },

  clinic_location: {
    type: Object,
    required: true,
  },

  PVMC_reg: pvmc,

  Services: [services],
});

export const clinic_model = mongoose.model("Vet clinic", clinicSchema);
