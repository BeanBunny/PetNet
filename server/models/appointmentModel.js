import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    date: {
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

export const appointmentModel = mongoose.model("appointment", appointmentSchema);
