import axios from "axios";
import settings from "../config/settings";

const endpoint = '/auth';
const loadUser = () => axios.get(`${settings.apiUrl}${endpoint}`)
const register = (username, password) => axios.post(`${settings.apiUrl}/users`, { username, password });
const login = (username, password) => axios.post(`${settings.apiUrl}${endpoint}`, { username, password });


const authApi =  {
    loadUser,
    register,
    login,
};

export default authApi