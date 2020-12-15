import axios from 'axios';
const endpoint = '/products';


const createProduct = fd => axios.post(`http://localhost:5000${endpoint}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
const getProducts = () => axios.get(`http://localhost:5000${endpoint}${window.location.search}`);
const getProduct = id => axios.get(`http://localhost:5000${endpoint}/${id}`);

const productsApi = {
    getProducts,
    createProduct,
    getProduct,
};

export default productsApi;