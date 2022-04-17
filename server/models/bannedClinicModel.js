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
        match: [/[0-9]{13}$/, "invalid cnic entered, enter 13 digit cnic without dashes"], //03XXXXXXXXX
    },
    email: {
        type: String,
        required: [true, "Email missing"],
        maxlength: 255,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "invalid banned clinic email",
        ],
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
        required: true,
        maxlength: 255,
    },
});

const removeClinicCascade = async (clinicEmail) => {
    // use email to find vet id

    const clinic = await clinicModel.find({ email: clinicEmail });

    // remove that ID from appointments table (that are not completed)
    // remove that ID from report vets table
    // remove that ID from report vet owner table
    // remove that ID from vet clinic table
};

export const bannedClinicModel = mongoose.model("banned clinic", bannedClinic);
