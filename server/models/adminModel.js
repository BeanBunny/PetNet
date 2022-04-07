import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, //todo:validate
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

export const adminModel = mongoose.model("admin", adminSchema);
