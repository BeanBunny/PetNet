import createDataContext from "./createDataContext";
import restApi from "../api/restApi";
import navigate from "../navigationRef";

const petReducer = (state, action) => {
    switch (action.type) {
        case "pets":
            return { ...state, pets: action.payload };
        case "profile":
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

const getDetails = (dispatch) => async () => {
    try {
        const resp = await restApi.get("/petowner/profile");
        dispatch({ type: "pets", payload: resp.data.pet });
        dispatch({ type: "profile", payload: resp.data });
    } catch (err) {
        console.log(err);
    }
};

const addPet =
    (dispatch) =>
    async ({ name, type }) => {
        try {
            let resp = await restApi.post("/petowner/add-pet", {
                name,
                type,
            });
            dispatch({ type: "pets", payload: resp.data.pet });
            dispatch({ type: "profile", payload: resp.data });
            navigate("EditPets");
        } catch (err) {
            console.log(err);
        }
    };

const removePet =
    (dispatch) =>
    async ({ item }) => {
        try {
            let resp = await restApi.post("/petowner/remove-pet", {
                petId: item._id,
            });
            dispatch({ type: "pets", payload: resp.data.pet });
            dispatch({ type: "profile", payload: resp.data });
        } catch (err) {
            console.log(err);
        }
    };

export const { Provider, Context } = createDataContext(
    petReducer,
    {
        getDetails,
        addPet,
        removePet,
    },
    { pets: [], profile: null }
);
