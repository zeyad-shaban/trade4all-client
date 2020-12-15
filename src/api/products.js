import axios from 'axios';
import settings from '../config/settings';
const endpoint = '/products';


const createProduct = fd => axios.post(`${settings.apiUrl}${endpoint}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
const getProducts = () => axios.get(`${settings.apiUrl}${endpoint}${window.location.search}`);
const getProduct = id => axios.get(`${settings.apiUrl}${endpoint}/${id}`);

const productsApi = {
    getProducts,
    createProduct,
    getProduct,
};

export default productsApi;