import { models } from "../models/models.js";
import jwt from "jsonwebtoken";

export const postSignIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(422).send({ error: "Invalid login: No input seen" });
    const user = await models.admin.findOne({ email: email });
    if (!user) return res.status(422).send({ error: "Invalid email address" });
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, process.env.SECRET);
        res.send({ token });
    } catch (err) {
        return res.status(422).send({ error: err.message });
    }
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
    // remove dummy insertion -----------------------
    const dummyClinic = {
        cnic: "11102938877845",
        email: "umair@gm6a1li0il.com",
        password: "hash256 of password",
        phone: "03275656270",
        clinic_name: "Umair23 Vet Clinic111",
        clinic_location: { lat: 420, long: 69 },

        pvmc_reg: {
            name: "Umair Yousaf",
            gender: "M",
            reg_num: "155693991",
            father_name: "Yousaf Javed",
        },

        services: [],
    };
    // ----------------------------------------------

    console.log("inside post ban user");

    const user = req.body;

    // CHANGE THESE WHEN SESSION IMPLEMENTED -----------------
    const adminEmail = "umair@gmail.com"; // object ID IRL
    const banReason = "terrorism";
    const admin = await models.admin.findOne({ email: adminEmail }); // change from email to _id
    // -------------------------------------------------------

    // console.log("USER:", user);

    let bannedUser = {
        admin_id: admin._id,
        email: user.email,
        phone: user.phone,
        reason: banReason,
    };

    // console.log("BANNED USER", bannedUser);

    try {
        // is a vet clinic
        if (user.cnic) {
            bannedUser["cnic"] = user.cnic;
            bannedUser["reg_num"] = user.pvmc_reg.reg_num;

            // await models.bannedClinic(bannedUser).save();
            await models.removeClinicCascade(user.email);

            return res.send("Banned vet clinic!");
        }
        // is a pet owner
        else {
            await models.bannedPetOwners(bannedUser).save();

            return res.send("Banned pet owner!");
        }
    } catch (err) {
        return res.status(422).send(err.message);
    }
};
