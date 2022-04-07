import { models } from "../models/models.js";

export const postSignup = async (req, res) => {
    res.send("INSIDE SIGNUP - POST");
};

export const getSignup = (req, res) => {
    // render signup page

    res.send("INSIDE SIGNUP - GET");
};

export const getSignUpRequests = (req, res) => {
    console.log("aaaa");

    // try {
    //     const pendingRequests = models.verification_clinic().
    // } catch (err) {console.log(err.message);
    // return res.status(422).send(err.message);}

    res.send("AAAAA");
};
