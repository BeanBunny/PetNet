import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const reportClinicSchema = new mongoose.Schema({
  petowner_id: {
    type: ObjectId,
    required: true,
  },
  report_reason: {
    type: String,
    required: true,
  },
  vet_id: {
    type: ObjectId,
    required: true,
  },
});

export const reportClinicModel = mongoose.model(
  "reported clinic",
  reportClinicSchema
);
