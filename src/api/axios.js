import axios from 'axios';

const instance = axios.create({
        baseURL : 'http://localhost:8080/api/v1',//백엔드 서버 주소
        timeout : 5000,
        header : {
            'Content-Type': 'application/json',
        }
    }
);

export default instance;