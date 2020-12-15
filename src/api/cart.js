import axios from 'axios';
import settings from '../config/settings';
const endpoint = '/cart'

const getCart = () => axios.get(`${settings.apiUrl}${endpoint}`)
const buyProduct = id => axios.put(`${settings.apiUrl}${endpoint}/buy/${id}`);
const removeProduct = id => axios.put(`${settings.apiUrl}${endpoint}/remove/${id}`)


const cartApi =  {
    getCart,
    buyProduct,
    removeProduct
}

export default cartApi