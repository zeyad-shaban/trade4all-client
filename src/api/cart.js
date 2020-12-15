import axios from 'axios';
const endpoint = '/cart'

const getCart = () => axios.get(`http://localhost:5000${endpoint}`)
const buyProduct = id => axios.put(`http://localhost:5000${endpoint}/buy/${id}`);
const removeProduct = id => axios.put(`http://localhost:5000${endpoint}/remove/${id}`)


const cartApi =  {
    getCart,
    buyProduct,
    removeProduct
}

export default cartApi