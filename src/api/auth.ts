import axios from 'axios';
import Config from '../utils/config';

export const register = (data: { email: string; name: string; password: string }) => {
    return axios.post(`${Config.apiUrl}/auth/signup`, data);
};

export const login = (data: { email: string; password: string }) => {
    return axios.post(`${Config.apiUrl}/auth/signin`, data);
};