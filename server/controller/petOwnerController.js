import { models } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const postSignUp = async (req, res) => {
  const { name, email, password, pet, phone, location } = req.body;
  try {
    const petOwner = new models.petOwner({
      email,
      password,
      name,
      pet,
      phone,
      location,
    });
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
  if (!email || !password)
    return res.status(422).send({ error: "Invalid login: No input seen" });

  const user = await models.petOwner.findOne({ email: email });
  // if (!user) return res.status(422).send({ error: "Invalid email address" });
  if (!user) return res.send({ err: "Incorrect email address" });
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
  const id = req.user._id;

  try {
    // let petOwner = await models.petOwner.findById(id);
    let petOwner = req.user;

    if (petOwner.pet.length < 5) {
      petOwner.pet.push({ petType: petType, petName: petName });
      await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, {
        runValidators: true,
      });

      return res.send(petOwner);
    } else {
      return res.status(422).send("Pets can not be more than 5");
    }
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

// i assume i am getting petOwner ID and petID
export const postRemovePet = async (req, res) => {
  const petOwnerId = req.user.petOwnerId;
  const petId = req.body.petId;

  try {
    // let petOwner = await models.petOwner.findById(petOwnerId);
    let petOwner = req.user;
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
    await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, {
      runValidators: true,
    });

    return res.send(petOwner);
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
};

// i assume i am getting user id from front end
export const getProfile = async (req, res) => {
  try {
    return res.send(req.user);
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postUpdateProfileGeneral = async (req, res) => {
  console.log(req.user);
  const petOwnerId = req.user._id;
  const newPhone = req.body.phone;
  const newEmail = req.body.email;
  const newName = req.body.name;
  console.log(req.body, petOwnerId, newPhone, newEmail, newName);

  try {
    // let petOwner = await models.petOwner.findById(petOwnerId);
    let petOwner = req.user;
    console.log(petOwner);

    if (newPhone) {
      petOwner.phone = newPhone;
    }
    if (newEmail) {
      petOwner.email = newEmail;
    }
    if (newName) {
      petOwner.name = newName;
    }

    console.log(newPhone, newEmail, newName);
    await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, {
      runValidators: true,
    });
    console.log(petOwner);
    return res.send("Updates successful!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postUpdateProfilePassword = async (req, res) => {
  const newPassword = req.body.newPassword;
  const petOwnerId = req.body.userId;

  try {
    let petOwner = await models.petOwner.findById(petOwnerId);

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(422).send(err);
      }

      bcrypt.hash(newPassword, salt, async (err, hash) => {
        if (err) {
          return res.status(422).send(err);
        }
        petOwner.password = hash;

        await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, {
          runValidators: true,
        });

        return res.send("Updates successful!");
      });
    });
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

    await models.petOwner.updateOne({ _id: petOwner._id }, petOwner, {
      runValidators: true,
    });

    return res.send("Pet profile updated!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

// returning all appointments
export const getPastAppointments = async (req, res) => {
  // fix pages issue ----------------------------------------------------------------

  try {
    const petsList = req.user.pet;
    const petOwnerId = req.user._id;
    const pastAppointments = await models.appointment
      .find({
        petowner_id: petOwnerId,
      })
      .lean();
    let pendingList = [];
    let otherList = [];

    for (let i = 0; i < pastAppointments.length; i++) {
      let key = pastAppointments[i];
      const pet_id = key.pet_id;
      const petName = petsList.filter((val) => pet_id.equals(val._id))[0]
        .petName;
      key.petName = petName;
      pastAppointments[i] = key;
    }

    let arr = await Promise.all(
      pastAppointments.map(async (val) => {
        let temp = await models.clinic.findById(val.vet_id);
        return temp.clinic_name;
      })
    );

    for (let i = 0; i < pastAppointments.length; i++) {
      pastAppointments[i].clinicName = arr[i];
    }
    pastAppointments.forEach((appointment) => {
      if (appointment.status === "completed") {
        otherList.push(appointment);
      } else {
        pendingList.push(appointment);
      }
    });

    pendingList.sort((a, b) => {
      return a.date - b.date;
    });

    otherList.sort((a, b) => {
      return a.date - b.date;
    });

    pendingList = pendingList.map((val) => {
      return { ...val, date: val.date.toString().split(" ").slice(0, 5) };
    });
    otherList = otherList.map((val) => {
      return { ...val, date: val.date.toString().split(" ").slice(0, 5) };
    });
    const finalList = [pendingList, otherList];
    return res.send({ finalList });
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
};

// getting vetId and petOwnerId and petId
export const postSetAppointment = async (req, res) => {
  const { petId, vetId, type, date } = req.body;
  const petOwnerId = req.user._id;
  console.log(req.user);
  console.log(petId, vetId, type, petOwnerId);
  console.log("dateee-->", date);
  try {
    const status = "pending";

    const appointmentData = {
      type: type,
      date: new Date(date),
      status: status,
      petowner_id: petOwnerId,
      pet_id: petId,
      vet_id: vetId,
    };

    await models.appointment(appointmentData).save();

    res.send("Appointment set!");
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
};

export const postReportVet = async (req, res) => {
  const { petOwnerId, vetId, reason } = req.body;

  try {
    const reportData = {
      petowner_id: petOwnerId,
      vet_id: vetId,
      report_reason: reason,
    };

    console.log(reportData);

    await models.reportClinic(reportData).save();

    return res.send("Reported!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

//faizan

export const getClinics = async (req, res) => {
  try {
    const petOwner = req.user;
    const city = petOwner.location;
    //get all vets of this city
    const nearbyVets = await models.clinic.find({ clinic_location: city });
    res.send(nearbyVets);
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
};
