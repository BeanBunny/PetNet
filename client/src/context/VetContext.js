import createDataContext from "./createDataContext";
import restApi from "../api/restApi";
import navigate from "../navigationRef";

const vetReducer = (state, action) => {
    switch (action.type) {
        case "service":
            return { ...state, services: action.payload };
        case "vetProfile":
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

const getDetails = (dispatch) => async () => {
    try {
        console.log("getting deets");
        const resp = await restApi.get("/vet/get-details");
        dispatch({ type: "service", payload: resp.data.services });
        dispatch({ type: "vetProfile", payload: resp.data });
    } catch (err) {
        console.log(err);
    }
};

const addService =
    (dispatch) =>
    async ({ service_name, price }) => {
        try {
            console.log("addding");
            let resp = await restApi.post("/vet/add-service", {
                name: service_name,
                price: price,
            });
            console.log(resp.data, "in context");
            dispatch({ type: "service", payload: resp.data.profile.services });
            dispatch({ type: "vetProfile", payload: resp.data.profile });
            navigate("EditServ");
        } catch (err) {
            console.log(err);
        }
    };

const deleteService =
    (dispatch) =>
    async ({ item }) => {
        try {
            console.log("deleting");
            let resp = await restApi.post("/vet/delete-service", {
                name: item.service_name,
            });
            console.log(resp.data, "in context");
            dispatch({ type: "service", payload: resp.data.profile.services });
            dispatch({ type: "vetProfile", payload: resp.data.profile });
        } catch (err) {
            console.log(err);
        }
    };

export const { Provider, Context } = createDataContext(
    vetReducer,
    {
        getDetails,
        addService,
        deleteService,
    },
    { services: [], profile: null }
);
