import { models } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const postSignUp = async (req, res) => {
    const { name, email, password, pet, phone, location } = req.body;
    try {
        const petOwner = new models.petOwner({ email, password, name, pet, phone, location });
        await petOwner.save();
        const token = jwt.sign({ userId: petOwner._id }, process.env.SECRET);
        res.send({ token, userId: petOwner._id });
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
};

export const postSignIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(422).send({ error: "Invalid login: No input seen" });

    const user = await models.petOwner.findOne({ email: email });
    // if (!user) return res.status(422).send({ error: "Invalid email address" });
    if (!user) return res.send({ err: "Invalid email address" });
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, process.env.SECRET);
        res.send({ token, userId: user._id });
    } catch (err) {
        // res.set("Content-Type", "text/plain");
        // return res.status(400).send("Incorrect password");
        res.send({ err: "Incorrect password" });
    }
};

// assuming that i am getting ObjectId() of pet owner
// i am also getting name and type of new pet to be added
export const postAddPet = async (req, res) => {
    const petName = req.body.name;
    const petType = req.body.type;
    const id = req.body.id;

    try {
        let petOwner = await models.petOwner.findById(id);

        if (petOwner.pet.length < 5) {
            petOwner.pet.push({ petType: petType, petName: petName });
            await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, {
                runValidators: true,
            });

            return res.send("Pet added successfully!");
        } else {
            return res.status(422).send("Pets can not be more than 5");
        }
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

// i assume i am getting petOwner ID and petID
export const postRemovePet = async (req, res) => {
    const petOwnerId = req.body.petOwnerId;
    const petId = req.body.petId;

    try {
        let petOwner = await models.petOwner.findById(petOwnerId);
        let index = -1;

        for (let i = 0; i < petOwner.pet.length; i++) {
            if (petOwner.pet[i]._id.equals(petId)) {
                index = i;
            }
        }

        if (index === -1) {
            return res.status(422).send("Pet not found!");
        }

        petOwner.pet.splice(index, 1);
        await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, { runValidators: true });

        return res.send("Pet Removed successfully!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

// i assume i am getting user id from front end
export const getProfile = async (req, res) => {
    const petOwnerId = req.body.userId;

    try {
        return res.send(await models.petOwner.findById(petOwnerId));
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

export const postUpdateProfileGeneral = async (req, res) => {
    const petOwnerId = req.body.userId;
    const newPhone = req.body.newPhone;
    const newEmail = req.body.newEmail;
    const newName = req.body.newName;

    try {
        let petOwner = await models.petOwner.findById(petOwnerId);

        if (newPhone) {
            petOwner.phone = newPhone;
        }
        if (newEmail) {
            petOwner.email = newEmail;
        }
        if (newName) {
            petOwner.name = newName;
        }

        await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, { runValidators: true });

        return res.send("Updates successful!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

export const postUpdateProfilePassword = async (req, res) => {
    // remove this ----------------------------------------
    const email = req.body.email;
    const temp = await models.petOwner.findOne({ email: email });
    const petOwnerId = temp._id;
    // ----------------------------------------------------

    const newPassword = req.body.newPassword;
    const newConfirmPassword = req.body.newConfirmPassword;
    // const petOwnerId = req.body.userId;

    try {
        let petOwner = await models.petOwner.findById(petOwnerId);

        if (!(newPassword === newConfirmPassword)) {
            throw false;
        }

        // bcrypt with what salt????????? or already bcrypted when recieved? ---> in that case bcrypt.compare and await function

        // await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, { runValidators: true });

        return res.send("Updates successful!");
    } catch (err) {
        if (!err) {
            return res.status(422).send("Passwords do not match!");
        }
        return res.status(422).send(err.message);
    }
};

export const postUpdatePetProfile = async (req, res) => {
    const newName = req.body.newName;
    const newType = req.body.newType;
    const petOwnerId = req.body.userId;
    const petId = req.body.petId;

    try {
        let petOwner = await models.petOwner.findById(petOwnerId);
        let index = -1;

        for (let i = 0; i < petOwner.pet.length; i++) {
            if (petOwner.pet[i]._id.equals(petId)) {
                index = i;
            }
        }

        if (index === -1) {
            return res.status(422).send("Pet not found!");
        }

        if (newName) {
            petOwner.pet[index].petName = newName;
        }
        if (newType) {
            petOwner.pet[index].petType = newType;
        }

        await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, { runValidators: true });

        return res.send("Pet profile updated!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

// returning all appointments
export const getPastAppointments = async (req, res) => {
    // fix pages issue --------------------------------

    // // remove this ----------------------------------------
    // const email = req.body.email;
    // const temp = await models.petOwner.findOne({ email: email });
    // const petOwnerId = temp._id;
    // // ----------------------------------------------------

    const petOwnerId = req.body.userId;

    try {
        const pastAppointments = await models.appointment.find({ petowner_id: petOwnerId });

        let pendingList = [];
        let otherList = [];

        pastAppointments.forEach((appointment) => {
            if (appointment.status === "pending") {
                pendingList.push(appointment);
            } else {
                otherList.push(appointment);
            }
        });

        pendingList.sort((a, b) => {
            return a.date - b.date;
        });

        otherList.sort((a, b) => {
            return a.date - b.date;
        });

        return res.send(pendingList.concat(otherList));
    } catch (err) {
        return res.status(422).send(err.message);
    }
};
