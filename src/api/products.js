import axios from 'axios';
const endpoint = '/products';


const getProducts = () => axios.get(`http://localhost:5000${endpoint}${window.location.search}`);
const createProduct = (fd) => axios.post(`http://localhost:5000${endpoint}`, fd, {headers: {'Content-Type': 'multipart/form-data'}})

export default {
    getProducts,
    createProduct,
};