import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD
    }
});


api.authenticateTeacher = async function (id, password, color = '') {
    try {
        const response = await this.post('/teacher/login', { id, password, color });
        return response.status === 200;
    } catch (error) {
        console.error("Authentication failed:", error);
        return false;
    }
};


export default api;
