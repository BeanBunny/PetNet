import { models } from "../models/models.js";

export const postSignup = async (req, res) => {
    try {
        const signup = models.verificationClinic(req.body);
        await signup.save();

        return res.send("DONE!!!!!!!!!!!!!!!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

export const getSignup = (req, res) => {
    // render signup page

    res.send("INSIDE SIGNUP - GET");
};

export const postLogin = (req, res) => {};
