// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";
import vetRoutes from "./routes/vetRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import petOwnerRoutes from "./routes/petOwnerRoutes.js";
import mongodb from "mongodb";
import mongoose from "mongoose";
import { models } from "./models/models.js";

const MongoClient = mongodb.MongoClient;
const mongoDBConnectionURL = process.env.MONGODB_URL;
const dbName = "petnet";

mongoose.connect(mongoDBConnectionURL);
const db = mongoose.connection;
db.on("connected", () => {
    console.log("Connected to MongoDB...");
});
db.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
});
db.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
});

// Init an Express App.
const app = express();

// use all controllers(APIs) here

app.use(bodyParser.json());

app.use("/vet", vetRoutes);

app.use("/admin", adminRoutes);

app.use("/petowner", petOwnerRoutes);

// Start Server here
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
