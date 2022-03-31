import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, //todo:validate
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

export const admin_model = mongoose.model("admin", adminSchema);
