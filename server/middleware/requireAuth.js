import jwt from "jsonwebtoken";
import { models } from "../models/models.js";

export const adminRequireAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in" });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET, async (err, payload) => {
        if (err)
            return res.status(401).send({ error: "You must be logged in" });
        const { userId } = payload;
        const user = await models.admin.findById(userId);
        req.user = user;
        next();
    });
};
export const petOwnerRequireAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in" });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET, async (err, payload) => {
        if (err)
            return res.status(401).send({ error: "You must be logged in" });
        const { userId } = payload;
        const user = await models.petOwner.findById(userId);
        req.user = user;
        next();
    });
};
