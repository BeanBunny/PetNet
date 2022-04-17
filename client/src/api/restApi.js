import axios from "axios";
import * as AsyncStorage from "expo-secure-store";

const instance = axios.create({
  baseURL: "http://3d1a-2400-adc5-1d7-f000-804c-f6c9-c432-bd18.ngrok.io",
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
