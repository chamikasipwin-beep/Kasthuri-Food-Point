import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const menuAPI = {
    getAllItems: () => api.get('/menu'),
    getItemById: (id) => api.get(`/menu/${id}`),
    getItemsByCategory: (category) => api.get(`/menu/category/${category}`),
};

export const orderAPI = {
    createOrder: (orderData) => api.post('/orders', orderData),
    getOrderById: (id) => api.get(`/orders/${id}`),
    getAllOrders: () => api.get('/orders'),
};

export default api;
