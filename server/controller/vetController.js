import { models } from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// give me req.body such that is contains only fields required for signup
export const postSignup = async (req, res) => {
    const details = req.body;
    try {
        console.log(req.body);
        const checkExist = await models.clinic.find({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone },
                { cnic: req.body.cnic },
                { "pvmc_reg.reg_num": req.body.pvmc_reg.reg_num },
            ],
        });
        if (checkExist.length !== 0) {
            const EMAIL = "EMAIL, ";
            const PHONE = "Phone number, ";
            const CNIC = "CNIC, ";
            const PVMC = "Reg num of PVMC, ";
            let err = "";
            checkExist.forEach((val) => {
                if (val.email === req.body.email) err += EMAIL;
                if (val.phone === req.body.phone) err += PHONE;
                if (val.cnic === req.body.cnic) err += CNIC;
                if (val.pvmc_reg.reg_num === req.body.pvmc_reg.reg_num)
                    err += PVMC;
            });
            console.log(err);
            return res.send({
                err: err + " is/are in use with another account",
            });
        }
        const clinicModel = new models.verificationClinic(details);
        await clinicModel.save();
        const token = jwt.sign({ userId: clinicModel._id }, process.env.SECRET);
        res.send({ token, userId: clinicModel._id });
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
};

export const postSignin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    if (!email || !password)
        return res.status(422).send({ error: "Invalid login: No input seen" });

    const user = await models.clinic.findOne({ email: email });
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

//king function
export const getAppointments = async (req, res) => {
    //vet ID and appointment status received
    const vetId = req.user._id;
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
                // console.log(appointmentPetId);
                // console.log(listOfPets[j]._id);
                if (appointmentPetId.equals(listOfPets[j]._id)) {
                    // console.log(listOfPets);
                    petTypes.push(listOfPets[j].petType);
                }
            }
            // console.log(petTypes);
            result[i] = {
                appointment_type: appointmentsList[i].type,
                petType: petTypes[i],
                petowner_name: petOwners[i].name,
                petowner_phone: petOwners[i].phone,
                appointment_time: appointmentsList[i].date,
                appointment_status: appointmentsList[i].status,
                _id: appointmentsList[i]._id,
                petOwnerEmailId: petOwners[i].email,
            };
        }

        //return sorted result
        result.sort(function (a, b) {
            return a.date - b.date;
        });
        result = result.map((val) => {
            let date = val.appointment_time.toString().split(" ");
            return { ...val, appointment_time: date };
        });
        console.log(result);
        return res.send(result);
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

// //king function
// export const getAppointments = async (req, res) => {
//     console.log("in appointment contoller");
//     //vet ID and appointment status received
//     console.log(req.user);
//     const vetId = req.user._id;
//     const status = req.body.status;
//     try {
//         // query appointments table for the particular clinic
//         const appointmentsList = await models.appointment.find({
//             vet_id: vetId,
//             status: status,
//         });
//         if (appointmentsList.length == 0) {
//             return res.send([]);
//         }
//         // get all petowner and pet ids
//         let petOwnerIds = [];
//         let petIdLists = [];
//         appointmentsList.forEach((element) => {
//             petOwnerIds.push(element.petowner_id);
//             petIdLists.push(element.petowner_id);
//         });
//         // get all petwner details (order would change so for loops rearrange)
//         const petOwners2 = await models.petOwner.find({
//             _id: { $in: petOwnerIds },
//         });
//         let petOwners = [];
//         let result = [];
//         for (let i = 0; i < petOwnerIds.length; i++) {
//             for (let j = 0; j < petOwners2.length; j++) {
//                 if (petOwners2[j]._id.equals(petOwnerIds[i])) {
//                     petOwners.push(petOwners2[j]);
//                     break;
//                 }
//             }
//             // console.log(petTypes);
//             result.push({
//                 appointment_type: appointmentsList[i].type,
//                 pet_type: petTypes[i],
//                 petowner_name: petOwners[i].name,
//                 petowner_phone: petOwners[i].phone,
//                 date: appointmentsList[i].date.toString().split(" "),
//                 appointment_status: appointmentsList[i].status,
//             });
//         }

// //return sorted result
// result.sort(function (a, b) {
//     return a.date - b.date;
// });

//         return res.send(result);
//     } catch (err) {
//         console.log(err);
//         return res.status(422).send(err.message);
//     }
// };

export const postAcceptAppointment = async (req, res) => {
    //need appointment id
    const appointmentId = req.body.id;
    try {
        //update appointment by id
        await models.appointment.updateOne(
            { _id: appointmentId },
            { status: "approved" },
            { runValidators: true }
        );
        return res.send("Appointment updated");
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
};

export const postCompleteAppointment = async (req, res) => {
    //need appointment id
    const appointmentId = req.body.id;
    try {
        //update appointment by id
        await models.appointment.updateOne(
            { _id: appointmentId },
            { status: "completed" },
            { runValidators: true }
        );
        return res.send("Appointment completed");
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
};

export const postRejectAppointment = async (req, res) => {
    //need appointment id
    const appointmentId = req.body.id;
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
        const vet = await models.clinic.findOne({ email: vet_email });
        console.log(vet);
        const servicesList = vet.services;
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
            .save();
        return res.send("Pet Owner Reported!");
    } catch (err) {
        return res.status(422).send(err.message);
    }
};

export const postEditClinicProfile = async (req, res) => {
    //vet id, phone, email, password, clinic name, about clinic (all not required)
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
