import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const reportPetOwnerSchema = new mongoose.Schema({
  pet_owner_id: {
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

export const reportPetOwnerModel = mongoose.model(
  "reported pet owner",
  reportPetOwnerSchema
);
