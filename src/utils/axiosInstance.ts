import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://10.1.40.130:3000',
    timeout: 70000,
    timeoutErrorMessage: 'Request timed out'
})



export default axiosInstance;