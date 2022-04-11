// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";
import vetRoutes from "./routes/vetRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import mongodb from "mongodb";
import mongoose from "mongoose";
import { models } from "./models/models.js";
// import pkg from "express-openid-connect";
// const { auth, requiresAuth } = pkg; // requires auth == middleware

const MongoClient = mongodb.MongoClient;
const mongoDBConnectionURL = "mongodb://127.0.0.1:27017/";
const dbName = "petnet";

mongoose.connect(mongoDBConnectionURL + dbName);
const db = mongoose.connection;
db.on("connected", () => {
    console.log("Connected to MongoDB...");
});
db.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
});
// connection is disconnected
db.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
});

// Init an Express App.
const app = express();

// ----------------------------------------------
// SEE THE LINES YOU WANNA ADD FROM YOUR COURSE
//----------------------------------------------

// Use your dependencies here
// use all controllers(APIs) here

// remove this ######################
const umairAdmin = {
    email: "umair@gmail.com",
    password: "12345678",
};
try {
    const signup = models.admin(umairAdmin);
    await signup.save();
} catch (err) {
    // do nothing
}
// ends here^^ ######################

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
};

// app.use(auth(config));

app.use(bodyParser.json());

app.use("/vet", vetRoutes);

app.use("/admin", adminRoutes);

// Start Server here
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
