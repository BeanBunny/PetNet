// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";
import userController from "./controller/user.controller.js";
import mongoose from "mongoose";
import { models } from "./database/schemas/models.js";
const connectionURL = "mongodb://127.0.0.1:27017/";
const dbName = "petnet";

//DB connection
mongoose.connect(connectionURL + dbName);
const db = mongoose.connection;
db.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});
// connection is disconnected
db.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

// models
//   .petowner({
//     name: "Martin Scorsese",
//     phone: "03009988770", //check regex
//     email: "scorcese@gmail.com",
//     password: "qwertyuiop123$$",
//     pet: {
//       pet_type: "Dog",
//       pet_name: "De Niro",
//     },
//   })
//   .save()
//   .catch((err) => {
//     console.log("Error in adding pet owner", err);
//   });

// models.petowner.find({ email: "scorcese@gmail.com" }, (err, res) => {
//   console.log(res);
// });

// Init an Express App.
const app = express();

// ----------------------------------------------
// SEE THE LINES YOU WANNA ADD FROM YOUR COURSE
//----------------------------------------------

// Use your dependencies here
// use all controllers(APIs) here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userController);
// Start Server here
app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});
