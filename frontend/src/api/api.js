import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Authorization': `Basic ${btoa(process.env.REACT_APP_API_USERNAME + ":" + process.env.REACT_APP_API_PASSWORD)}`
    }
});

api.authenticateTeacher = async function (id, password, color = '') {
    try {
        const response = await this.post('/teacher/login', { id, password, color }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 202;
    } catch (error) {
        console.error("Authentication failed:", error);
        return false;
    }
};

api.getHomeworkData = async function () {
    try {
        const response = await this.get('/homework/all', {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.error('Error fetching data: ', response);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};

api.uploadHomework = async function (formData) {
    try {
        const response = await this.post('/homework/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 201) {
            return true;
        } else {
            console.error('Error uploading file: ', response);
            return false;
        }
    } catch (error) {
        console.error('Error uploading file: ', error);
        return false;
    }
};

export default api;
