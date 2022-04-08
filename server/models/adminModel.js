import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, //todo:validate
    maxlength: 255,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "invalid email",
    ],
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

export const adminModel = mongoose.model("admin", adminSchema);
