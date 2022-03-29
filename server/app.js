// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";
import userController from "./controller/user.controller.js";
import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "petnet";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error);
    }

    console.log("Conneced to MongoDB");
    const db = client.db(dbName);
    db.collection("users").insertOne({
        name: "umair",
        age: 21,
    });
});

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
