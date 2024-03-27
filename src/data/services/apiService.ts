import axios from 'axios';

const baseURL = process.env['API_BASE_URL'];

if (!baseURL) {
    throw new Error('Variável de ambiente API_BASE_URL não definida');
}

export const apiService = axios.create({ baseURL });
