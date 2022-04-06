import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const pvmcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "PVMC name missing"],
    maxlength: [30, "pvmc user name too long"],
  },
  gender: {
    type: String,
    required: [true, "gender missing"],
    maxlength: 1,
  },
  reg_num: {
    type: String,
    required: [true, "Registration number missing"],
    maxlength: [30, "Registration number too long"],
    unique: true,
  },
  father_name: {
    type: String,
    required: [true, "father name missing"],
    maxlength: [30, "father mame too long"],
  },
});

export const pvmc = pvmcSchema;
