import axios from 'axios';

const setAuthToken = () => {
    const token = localStorage.getItem('token');
    return token ? axios.defaults.headers.common['x-auth-token'] : delete axios.defaults.headers.common['x-auth-token'];
};
export default setAuthToken;