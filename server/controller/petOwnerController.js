import { models } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

// assuming that i am getting ObjectId() of pet owner
// i am also getting name and type of new pet to be added
export const postAddPet = async (req, res) => {
    const petName = req.body.name;
    const petType = req.body.type;
    const id = req.body.id;

    try {
        let petOwner = await models.petOwner.findById(id);

        if (petOwner.pet.length < 5) {
            petOwner.pet.push({ pet_type: petType, pet_name: petName });
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
            petOwner.pet[index].pet_name = newName;
        }
        if (newType) {
            petOwner.pet[index].pet_type = newType;
        }

        await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, { runValidators: true });

        return res.send("Pet profile updated!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

// only returning completed appointments
export const getPastAppointments = async (req, res) => {
    const petOwnerId = req.body.userId;

    try {
        const pastAppointments = await models.appointment.find({ petowner_id: petOwnerId });

        return res.send(pastAppointments);
    } catch (err) {
        return res.status(422).send(err.message);
    }
};
