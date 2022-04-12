import axios from "axios";
import * as AsyncStorage from "expo-secure-store";

const instance = axios.create({
    baseURL: "http://c611-2400-adc5-18e-7800-8da5-343e-63da-79b4.ngrok.io",
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
