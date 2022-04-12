import { models } from "../models/models.js";
import bcrypt from "bcrypt";

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

//king function
export const getAppointments = async (req, res) => {
  //vet ID and appointment status received
  const vetId = req.body._id;
  const status = req.body.status;
  try {
    // query appointments table for the particular clinic
    const appointmentsList = await models.appointment.find({
      vet_id: vetId,
      status: status,
    });
    if (appointmentsList.length == 0) {
      return res.send([]);
    }
    // get all petowner and pet ids
    let petOwnerIds = [];
    let petIdLists = [];
    appointmentsList.forEach((element) => {
      petOwnerIds.push(element.petowner_id);
      petIdLists.push(element.petowner_id);
    });
    // get all petwner details (order would change so for loops rearrange)
    const petOwners2 = await models.petOwner.find({
      _id: { $in: petOwnerIds },
    });
    let petOwners = [];
    for (let i = 0; i < petOwnerIds.length; i++) {
      for (let j = 0; j < petOwners2.length; j++) {
        if (petOwners2[j]._id.equals(petOwnerIds[i])) {
          petOwners.push(petOwners2[j]);
          break;
        }
      }
    }
    let result = [];
    //get all pet types
    let petTypes = [];

    //for every petowner, go through the list of pets and match the id from appointment to get pet type
    for (let i = 0; i < petOwners.length; i++) {
      let listOfPets = petOwners[i].pet;
      let appointmentPetId = appointmentsList[i].pet_id;
      for (let j = 0; j < listOfPets.length; j++) {
        if (appointmentPetId.equals(listOfPets[j]._id)) {
          petTypes.push(listOfPets[j].pet_type);
        }
      }
      // console.log(petTypes);
      result.push({
        appointment_type: appointmentsList[i].type,
        pet_type: petTypes[i],
        petowner_name: petOwners[i].name,
        petowner_phone: petOwners[i].phone,
        date: appointmentsList[i].date,
        appointment_status: appointmentsList[i].status,
      });
    }

    //return sorted result
    result.sort(function (a, b) {
      return a.date - b.date;
    });

    return res.send(result);
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postAcceptAppointment = async (req, res) => {
  //appointment object received
  const appointmentId = req.body._id;
  try {
    //update appointment by id
    await models.appointment.updateOne(
      { _id: appointmentId },
      { status: "accepted" },
      { runValidators: true }
    );
    return res.send("Appointment updated");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postRejectAppointment = async (req, res) => {
  //appointment object received
  const appointmentId = req.body._id;
  try {
    //remove appointment from appointment table
    await models.appointment.deleteOne({ _id: appointmentId });
    return res.send("Appointment deleted");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postAddService = async (req, res) => {
  //vet_id, service name, description, price received
  //might have to change the below names
  const { _id, name, description, price } = req.body;
  try {
    //add to list of services iff service name does not already exist
    let vet = await models.clinic.findById(_id);
    let servicesList = vet.services;

    //check if service name already exists
    for (let i = 0; i < servicesList.length; i++) {
      if (servicesList[i].name == name) {
        const error = { message: "Service name already exists!" };
        throw error;
        //return res.send("Service name already exists!");
      }
    }

    //if service doesnt exist, append to list of services and update db record
    //make new service
    const newService = {
      service_name: name,
      description: description,
      price: price,
    };
    //add to list of services
    servicesList.push(newService);

    //update vet record
    await models.clinic.updateOne(
      { _id: vet._id },
      { services: servicesList },
      { runValidators: true }
    );
    return res.send("Service Added!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postEditService = async (req, res) => {
  //vet_id, service_id, service name, description, price received
  const { _id, service_id, name, description, price } = req.body;

  try {
    //find clinic by id
    let vet = await models.clinic.findById(_id);
    let servicesList = vet.services;
    //update service by iterating over service list
    for (let i = 0; i < servicesList.length; i++) {
      if (servicesList[i]._id.equals(service_id)) {
        servicesList[i].name = name;
        servicesList[i].description = description;
        servicesList[i].price = price;
        break;
      }
    }
    //update record by repacing with the updated service list
    await models.clinic.updateOne(
      { _id: vet._id },
      { services: servicesList },
      { runValidators: true }
    );
    return res.send("Service Updated!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postDeleteService = async (req, res) => {
  //vet_id, service name received
  const { _id, name } = req.body;
  let deleteIndex = 0;
  try {
    let vet = await models.clinic.findById(_id);
    let servicesList = vet.services;
    //find index of service that needs to be deleted
    for (let i = 0; i < servicesList.length; i++) {
      if (servicesList[i].name === name) {
        deleteIndex = i;
        break;
      }
    }

    //service at deleteIndex dropped
    servicesList.splice(deleteIndex, 1);

    //update record by repacing with the updated service list
    await models.clinic.updateOne(
      { _id: vet._id },
      { services: servicesList },
      { runValidators: true }
    );
    return res.send("Service removed!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const getServices = async (req, res) => {
  //vet_email required (any vet index (id etc) would work)
  const vet_email = req.body.email;
  try {
    let vet = await models.clinic.findOne({ email: vet_email });
    console.log(vet);
    let servicesList = vet.services;
    //where each service has name description and price
    return res.send(servicesList);
    //return res.send("Service removed!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postReportPetOwner = async (req, res) => {
  //vet index, petowner index and report reason required
  //naming conventions check
  const vet_id = req.body.vet_id;
  const petowner_id = req.body.petowner_id;
  const reportReason = req.body.report_reason;

  try {
    await models
      .reportPetOwner({
        pet_owner_id: petowner_id,
        report_reason: reportReason,
        vet_id: vet_id,
      })
      .save()
      .then((res) => {
        console.log("Pet Owner reported", res);
      });
    return res.send("Pet Owner Reported!");
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const postEditClinicProfile = async (req, res) => {
  //vet id, phone, email, password, clinic name, about clinic required
  //if they are undefined then they arent updated
  const vet_id = req.body._id;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password; //to do: password hashing
  const clinicName = req.body.clinic_name;
  const aboutClinic = req.body.about_clinic;

  try {
    //query the vet to be updated
    let vet = await models.clinic.findById(vet_id);

    //update fields which arent undefined
    if (phone) vet.phone = phone;
    if (email) vet.email = email;
    if (clinicName) vet.clinic_name = clinicName;
    if (aboutClinic) vet.about_clinic = aboutClinic;

    if (password) {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        if (error) return res.status(422).send(err);
        bcrypt.hash(password, salt, async function (err, hash) {
          if (error) return res.status(422).send(err);
          vet.password = hash;
          await models.clinic.updateOne({ _id: vet_id }, vet, {
            runValidators: true,
          });
          return res.send("Profile Updated!");
        });
      });
    } else {
      await models.clinic.updateOne({ _id: vet_id }, vet, {
        runValidators: true,
      });
      return res.send("Profile Updated!");
    }
  } catch (err) {
    return res.status(422).send(err.message);
  }
};

export const getClinicDetails = async (req, res) => {
  try {
    //only clinic id required
    const vet_id = req.body._id;
    //fetch vet
    const vet = await models.clinic.findById(vet_id);
    return res.send(vet);
  } catch (err) {
    return res.status(422).send(err.message);
  }
};
