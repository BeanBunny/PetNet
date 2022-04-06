import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const pvmcSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "PVMC name missing"],
        maxlength: [30, "pvmc user name too long"],
    },
    gender: {
        type: String,
        required: [true, "gender missing"],
        maxlength: 1,
    },
    reg_num: {
        type: String,
        unique: true,
        required: [true, "Registration number missing"],
        maxlength: [30, "Registration number too long"],
    },
    father_name: {
        type: String,
        required: [true, "father name missing"],
        maxlength: [30, "father mame too long"],
    },
});

const verificationSchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: true,
        unique: true,
        match: [/[0-9]{13}$/, "invalid cnic entered, enter 13 digit cnic without dashes"], //03XXXXXXXXX
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email missing"], //todo:validate
        maxlength: 255,
    },
    password: {
        type: String,
        required: [true, "Password missing"], //todo:validate
    },

    phone_number: {
        type: String,
        unique: true,
        required: [true, "Phone number missing"],
        match: [/^((0))(3)([0-9]{9})$/, "invalid phone number"], //03XXXXXXXXX
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

    pvmc_reg: pvmcSchema,
});

export const verification_model = mongoose.model("verification", verificationSchema);
