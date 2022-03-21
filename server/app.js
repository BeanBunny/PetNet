// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";

import { userController } from "./user.controller";

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
    console.log("Server is running on port 8080!");
});
