import axios from "axios";
import * as AsyncStorage from "expo-secure-store";

const instance = axios.create({
  baseURL: "http://7947-2400-adc5-1d7-f000-589-3ab0-b7d-d7f6.ngrok.io",
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
