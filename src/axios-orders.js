import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-bc5b4.firebaseio.com/'
});

export default instance;