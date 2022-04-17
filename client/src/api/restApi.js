import axios from "axios";
import * as AsyncStorage from "expo-secure-store";

const instance = axios.create({
    baseURL: "https://petnet14040.herokuapp.com",
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItemAsync("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
