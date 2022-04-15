import mongoose from "mongoose";
import { pvmc } from "./pvmcModel.js";
import bcrypt from "bcrypt";
const ObjectId = mongoose.Schema.Types.ObjectId;

const verificationSchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: [true, "cnic missing"],
        match: [
            /[0-9]{13}$/,
            "invalid cnic entered, enter 13 digit cnic without dashes",
        ], //03XXXXXXXXX
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email missing"], //todo:validate
        unique: true,
        maxlength: 255,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "invalid clinic email",
        ],
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

    about_clinic: {
        type: String,
        required: false,
        maxlength: [16777215, "About too long"], //MEDIUMTEXT
    },

    clinic_location: {
        type: Object,
        required: true,
    },

    pvmc_reg: pvmc,
});

verificationSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

verificationSchema.pre("remove", async function (next) {
    const user = this;

    await appointmentModel.deleteMany({
        vet_id: user._id,
        status: { $ne: "completed" },
    });
    await reportClinicModel.deleteMany({ vet_id: user._id });
    await reportPetOwnerModel.deleteMany({ vet_id: user._id });

    next();
});

verificationSchema.methods.comparePassword = function (inputPassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, user.password, (err, isMatch) => {
            if (err) return reject(err);
            if (!isMatch) return reject(false);

            resolve(true);
        });
    });
};

export const verificationModel = mongoose.model(
    "verification",
    verificationSchema
);
