import jwt from "jsonwebtoken";
import { models } from "../models/models.js";

export default function (req, res, next) {
    console.log(req.headers);
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in" });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET, async (err, payload) => {
        if (err) return res.status(401).send({ error: "You must be logged in" });
        const { userId } = payload;
        // CHANGE THIS TO MAKE IT GENERAL FOR ADMIN, PET OWNERS, AND VETS
        const user = await models.admin.findById(userId);
        req.user = user;
        next();
    });
}
