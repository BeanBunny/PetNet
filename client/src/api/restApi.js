import axios from "axios";
import * as AsyncStorage from "expo-secure-store";

const instance = axios.create({
    baseURL: "http://7061-2400-adc5-18e-7800-75e6-2cf7-48b3-1e47.ngrok.io",
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
