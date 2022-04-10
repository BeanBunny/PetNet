import mongoose from "mongoose";
import { pvmc } from "./pvmcModel.js";
import bcrypt from "bcrypt";
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

export const verificationModel = mongoose.model("verification", verificationSchema);
