import mongoose from "mongoose";
import { pvmc } from "./pvmcModel.js";
const ObjectId = mongoose.Schema.Types.ObjectId;

const verificationSchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: [true, "cnic missing"],
        match: [/[0-9]{13}$/, "invalid cnic entered, enter 13 digit cnic without dashes"], //03XXXXXXXXX
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email missing"], //todo:validate
        unique: true,
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
        unique: true,
    },

    clinic_name: {
        type: String,
        required: [true, "Clinic name missing"],
        maxlength: [40, "Name to long"],
    },

    clinic_location: {
        type: Object,
        required: true,
    },

    pvmc_reg: pvmc,
});

export const verificationModel = mongoose.model("verification", verificationSchema);
