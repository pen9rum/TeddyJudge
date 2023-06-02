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


api.addCourse = async function (courseName, pdfFile) {
    let formData = new FormData();

    formData.append('course', JSON.stringify({ coursename: courseName }));
    formData.append('pdfFile', pdfFile);

    try {
        const response = await this.post('/course/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 201) {
            return true;
        } else {
            console.error('Error submitting course: ', response);
            return false;
        }
    } catch (error) {
        console.error('Error submitting course: ', error);
        return false;
    }
};

api.getContestData = async function () {
    try {
        const response = await this.get('/contest/all', {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.error('Error fetching contest data: ', response);
            return null;
        }
    } catch (error) {
        console.error('Error fetching contest data: ', error);
        return null;
    }
};

api.updateHomeworkStartTime = async function (homeworkName, dateParam) {
    try {
        const response = await this.put(`/homework/${homeworkName}/update/starttime`, null, {
            params: {
                dateParam: dateParam
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 200;
    } catch (error) {
        console.error("Error updating start time:", error);
        return false;
    }
};

api.updateHomeworkEndTime = async function (homeworkName, dateParam) {
    try {
        const response = await this.put(`/homework/${homeworkName}/update/endtime`, null, {
            params: {
                dateParam: dateParam
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 200;
    } catch (error) {
        console.error("Error updating end time:", error);
        return false;
    }
};

api.updateTestCase = async function (homeworkName, testCase) {
    try {
        const response = await this.put(`/homework/${homeworkName}/update/testcase`, testCase, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });

        return response.status === 200;
    } catch (error) {
        console.error("Error updating test case:", error);
        return false;
    }
};

api.updateTestCaseAnswer = async function (homeworkName, testCaseAnswer) {
    try {
        const response = await this.put(`/homework/${homeworkName}/update/testcaseanswer`, testCaseAnswer, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });

        return response.status === 200;
    } catch (error) {
        console.error("Error updating test case answer:", error);
        return false;
    }
};

api.updateHomeworkPDF = async function (homeworkName, pdfFile) {
    let formData = new FormData();

    formData.append('pdfFile', pdfFile);

    try {
        const response = await this.put(`/homework/${homeworkName}/update/pdf`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            return true;
        } else {
            console.error('Error updating PDF: ', response);
            return false;
        }
    } catch (error) {
        console.error('Error updating PDF: ', error);
        return false;
    }
};


api.getContestByName = async function (name) {
    try {
        const response = await this.get(`/contest/getByName/${name}`, {
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


export default api;
