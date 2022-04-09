import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const servicesSchema = new mongoose.Schema({
  service_name: {
    type: String,
    required: [true, "service name missing"],
    maxlength: [40, "service name too long"],
  },
  decription: {
    type: String,
    required: false,
    maxlength: [255, "service description too long"],
  },
  price: {
    type: Number,
    required: [true, "service price missing"],
    min: [0, "Price less than 0"],
    max: [50000, "Price can not be more than 50,000"],
  },
});

export const services = servicesSchema;
