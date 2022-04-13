import * as AsyncStorage from "expo-secure-store";
import createDataContext from "./createDataContext";
import restApi from "../api/restApi";
import navigate from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { errorMessage: "", token: action.payload };
        case "isVet":
            return { errorMessage: "", isVet: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        case "signout":
            return { token: null, errorMessage: "", isVet: null };
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItemAsync("token");
    if (token) {
        dispatch({ type: "signin", payload: token });
        //-----------NAVIGATE TO HOME SCREEN-------------------
        navigate("TrackList");
    } else {
        navigate("Signup");
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};

const signupPet =
    (dispatch) =>
    async ({ name, email, password, pet, phone, location, isVet }) => {
        try {
            console.log(name, email, password, pet, phone, location, isVet);
            const response = await restApi.post("/petowner/signup", {
                name,
                email,
                password,
                pet,
                phone,
                location,
            });
            await AsyncStorage.setItemAsync("token", response.data.token);
            await AsyncStorage.setItemAsync("isVet", isVet.toString());
            dispatch({ type: "signin", payload: response.data.token });

            const param = { screen: "Home" };
            const navigator = isVet ? "Vet" : "PetOwner";
            navigate(navigator, param);
        } catch (err) {
            console.log(err);
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign up",
            });
        }
    };

const signin =
    (dispatch) =>
    async ({ email, password, isVet }) => {
        try {
            const url = isVet ? "/vet/signin" : "/petowner/signin";
            const response = await restApi.post(url, { email, password });
            if (response.data.token) {
                await AsyncStorage.setItemAsync("token", response.data.token);
                await AsyncStorage.setItemAsync("isVet", isVet.toString());
                console.log(response.data.UserId);
                dispatch({ type: "signin", payload: response.data.token });
                navigate("Home");
            } else {
                dispatch({
                    type: "add_error",
                    payload: response.data.err,
                });
            }
        } catch (err) {
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign in",
            });
        }
    };

const signout = (dispatch) => async () => {
    await AsyncStorage.deleteItemAsync("token");
    await AsyncStorage.deleteItemAsync("isVet");
    dispatch({ type: "signout" });
    navigate("Start");
};

const isPetOrVet = (dispatch) => async (bool) => {
    dispatch({ type: "isVet", payload: bool });
    const param = { screen: "Login" };
    const navigator = bool ? "Vet" : "PetOwner";
    navigate(navigator, param);
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signin,
        signout,
        signupPet,
        clearErrorMessage,
        tryLocalSignin,
        isPetOrVet,
    },
    { token: null, errorMessage: "", isVet: null }
);
