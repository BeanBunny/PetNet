import { models } from "../models/models.js";
import { petOwnerModel } from "../models/petOwnerModel.js";
import jwt from "jsonwebtoken";

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
            await models.petOwner.updateOne({ _id: petOwner._id }, petOwner);

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
        await models.petOwner.updateOne({ _id: petOwner._id }, petOwner);

        return res.send("Pet Removed successfully!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};
