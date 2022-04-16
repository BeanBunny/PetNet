import axios from "axios";
import * as AsyncStorage from "expo-secure-store";

const instance = axios.create({
    baseURL: "http://1545-2400-adc5-18e-7800-69d5-b3a7-14e4-1bed.ngrok.io",
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
