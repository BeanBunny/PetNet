import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as vetController from "../controller/vetController.js";

const vetRoutes = express.Router();

vetRoutes.post("/signup", vetController.postSignup);

vetRoutes.get("/signup", vetController.getSignup);

export default vetRoutes;
