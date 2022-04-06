import { models } from "../database/schemas/models.js";

export const postSignup = async (req, res) => {
    console.log(req.body);

    try {
        const signup = models.verification_clinic(req.body);
        await signup.save();

        return res.send("DONE!!!!!!!!!!!!!!!");
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
};

export const getSignup = (req, res) => {
    // render signup page

    res.send("INSIDE SIGNUP - GET");
};

export const postLogin = (req, res) => {};
