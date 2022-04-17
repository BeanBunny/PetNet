import mongoose from "mongoose";
import bcrypt from "bcrypt";
const ObjectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, //todo:validate
        maxlength: 255,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "invalid admin email",
        ],
    },
    password: {
        type: String,
        required: true,
    },
});

adminSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = function (inputPassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, user.password, (err, isMatch) => {
            if (err) return reject(err);
            if (!isMatch) return reject(false);

            resolve(true);
        });
    });
};

export const adminModel = mongoose.model("admin", adminSchema);
