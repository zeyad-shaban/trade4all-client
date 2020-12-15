import axios from "axios";

const endpoint = '/auth';
const loadUser = () => axios.get(`http://localhost:5000${endpoint}`)
const register = (username, password) => axios.post(`http://localhost:5000/users`, { username, password });
const login = (username, password) => axios.post(`http://localhost:5000${endpoint}`, { username, password });


const authApi =  {
    loadUser,
    register,
    login,
};

export default authApi