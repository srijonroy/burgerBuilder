import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9467c-default-rtdb.firebaseio.com/'
});

export default instance;