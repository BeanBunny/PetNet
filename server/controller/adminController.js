import { models } from "../models/models.js";

// remove these 2
import mongoose from "mongoose";

export const postSignup = async (req, res) => {
    res.send("INSIDE SIGNUP - POST");
};

export const getSignup = (req, res) => {
    // if anything inside banned user table then dont let them signup
    res.send("INSIDE SIGNUP - GET");
};

export const getSignUpRequests = async (req, res) => {
    try {
        const pendingRequests = await models.verificationClinic.find();
        return res.send(pendingRequests);
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

export const getBanUser = (req, res) => {
    // should i return reported users or list of all users or what?
    res.send("INSIDE getBanUser");
};

export const postBanUser = async (req, res) => {
    const user = req.body;

    // CHANGE THESE WHEN SESSION IMPLEMENTED -----------------
    const adminEmail = "umair@gmail.com"; // object ID IRL
    const banReason = "terrorism";
    const admin = await models.admin.findOne({ email: adminEmail }); // change from email to _id
    // -------------------------------------------------------

    let bannedUser = {
        admin_id: admin._id,
        email: user.email,
        phone: user.phone,
        reason: banReason,
    };

    try {
        // is a vet clinic

        if (user.cnic) {
            bannedUser["cnic"] = user.cnic;
            bannedUser["reg_num"] = user.pvmc_reg.reg_num;

            const clinic = await models.clinic.findOne({ email: user.email });

            await clinic.remove();
            await models.bannedClinic(bannedUser).save();

            return res.send("Banned vet clinic!");
        }
        // is a pet owner
        else {
            console.log("INSIDE BANNED PET OWNER");
            console.log(user);

            const petOwner = await models.petOwner.findOne({ email: user.email });

            await petOwner.remove();
            await models.bannedPetOwners(bannedUser).save();

            return res.send("Banned pet owner!");
        }
    } catch (err) {
        return res.status(422).send(err.message);
    }
};
