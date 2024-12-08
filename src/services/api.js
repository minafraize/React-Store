import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const getProducts = () => {
    return axios.get(`${API_BASE}/products`);
};