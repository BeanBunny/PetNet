const ERROR_STRING = " Is Required.";
const INCORRECT_STRING = "Enter correct ";
const LENGTH_CHECK = " can not be longer than ";
const UPPER_LENGTH_CHECK = " can not be shorter than ";

const emailVerify = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return email.match(regex);
};

const numberVerify = (val) => {
    const regex = /^((0))(3)([0-9]{9})$/g;
    return val.match(regex);
};
const onlyNumber = (val) => {
    const regex = /^^[0-9]*$/g;
    return val.match(regex);
};

const cnicVerify = (val) => {
    const regex = /[0-9]{13}$/g;
    return val.match(regex);
};

export const errorEmail = (val) =>
    val.length === 0
        ? "Email" + ERROR_STRING
        : !emailVerify(val)
        ? INCORRECT_STRING + "Email"
        : val.length > 255
        ? "Email " + LENGTH_CHECK + "255 characters"
        : null;

export const errorNumber = (val) =>
    val.length === 0
        ? "Number" + ERROR_STRING
        : !numberVerify(val)
        ? INCORRECT_STRING + "Number"
        : null;

export const errorName = (val) =>
    val.length === 0
        ? "Name" + ERROR_STRING
        : val.length > 30
        ? "Name " + LENGTH_CHECK + "30 characters"
        : null;

export const errorRequired = (val, str) =>
    val.length === 0 ? str + ERROR_STRING : null;

export const errorEqual = (val1, val2) =>
    val1 !== val2 ? "Both passwords should match" : null;

export const errorPVMC = (val) =>
    val.length === 0
        ? "PVMC registration" + ERROR_STRING
        : !onlyNumber(val)
        ? INCORRECT_STRING + "PVMC registration"
        : val.length !== 5
        ? "PVMC registration" + UPPER_LENGTH_CHECK + "5 characters"
        : val.length > 5
        ? "PVMC registration" + LENGTH_CHECK + "5 characters"
        : null;

export const errorCNIC = (val) =>
    val.length === 0
        ? "CNIC " + ERROR_STRING
        : !cnicVerify(val)
        ? INCORRECT_STRING + "CNIC"
        : val.length > 13
        ? "CNIC" + LENGTH_CHECK + "13 characters"
        : null;
