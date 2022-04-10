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
        res.send({ token, userId: user._id });
    } catch (err) {
        return res.status(422).send({ error: err.message });
    }
};

  if (!user) return res.status(422).send({ error: "Invalid email address" });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: err.message });
  }
};

// What is this?
// export const getSignup = (req, res) => {
//   // if anything inside banned user table then dont let them signup
//   res.send("INSIDE SIGNUP - GET");
// };

export const getSignUpRequests = async (req, res) => {
  try {
    const pendingRequests = await models.verificationClinic.find();
    return res.send(pendingRequests);
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

// not sure if this is needed
// export const getBanPetOwners = async (req, res) => {};
// export const getBanClinics = async (req, res) => {};

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

// req = vet object
export const postAcceptRequest = async (req, res) => {
  console.log("INSIDE post Accept Request");
  try {
    const user = req.body;
    //remove from verification table
    await models.verificationClinic.deleteOne({ email: user.email });
    //add to clinic table
    await models
      .clinic({
        cnic: user.cnic,
        email: user.email,
        password: user.password,
        phone: user.phone,
        clinic_name: user.clinic_name,
        about_clinic: "",
        clinic_location: user.clinic_location,
        pvmc_reg: {
          name: user.pvmc_reg.name,
          gender: user.pvmc_reg.gender,
          reg_num: user.pvmc_reg.reg_num,
          father_name: user.pvmc_reg.father_name,
        },
        Services: [],
      })
      .save();

    return res.send("Clinic accepted!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

// req = vet object
export const postRejectRequest = async (req, res) => {
  console.log("INSIDE post RejectRequest");
  try {
    const user = req.body;

    //remove from verification table
    await models.verificationClinic.deleteOne({ email: user.email });

    return res.send("Clinic rejected!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};
