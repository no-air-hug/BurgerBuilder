import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a82d7.firebaseio.com/'
});

export default instance;