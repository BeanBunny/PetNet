import { models } from "../models/models.js";

export const postSignup = async (req, res) => {
    console.log(req.body);

    res.send("INSIDE ADMIN");
};

export const getSignup = (req, res) => {
    // render signup page

    res.send("INSIDE SIGNUP - GET");
};

export const postLogin = (req, res) => {};
