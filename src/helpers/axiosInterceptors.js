import axios from "axios";
import envs from "../config/envs";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../navigations/SideMenu/RootNavigator";
import { CREATE_CONTACT, LOGOUT } from "../constants/routeNames";

let headers = {};

const axiosInstance = axios.create({
    baseURL: envs.BACKEND_URL,
    headers
});
// console.log("baseUrl: ", envs);

axiosInstance.interceptors.request.use(
    async (config) => {
        // navigate(CREATE_CONTACT, {})
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            // `Bearer ${token}`
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    (response) => new Promise((resolve, reject) => {
        resolve(response);
    }), error => {
        if (!error.response) {
            console.log("error without response:", error);
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.response.status === 403) {
            console.log("error with response: ", error)
            navigate(LOGOUT, { tokenExpired: true })
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    })
export default axiosInstance;

