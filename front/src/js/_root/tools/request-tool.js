import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.188.201.252:8181/api'
});

export default instance;
