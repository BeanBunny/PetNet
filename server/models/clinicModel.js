import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
import { pvmc } from "./pvmcModel.js";
import { services } from "./servicesModel.js";
import { appointmentModel } from "./appointmentModel.js";
import { reportClinicModel } from "./reportClinicModel.js";
import { reportPetOwnerModel } from "./reportPetOwnerModel.js";

const clinicSchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: true,
        match: [/[0-9]{13}$/, "invalid cnic entered, enter 13 digit cnic without dashes"], //03XXXXXXXXX
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email missing"], //todo:validate
        maxlength: 255,
        unique: true,
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

    services: [services],

    image_url: {
        type: String,
        required: false,
    },
});

clinicSchema.pre("remove", async function (next) {
    const user = this;

    await appointmentModel.deleteMany({ vet_id: user._id, status: { $ne: "completed" } });
    await reportClinicModel.deleteMany({ vet_id: user._id });
    await reportPetOwnerModel.deleteMany({ vet_id: user._id });

    next();
});

export const clinicModel = mongoose.model("Vet clinic", clinicSchema);
