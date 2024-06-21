import axios from "axios";

const api = axios.create({
    baseURL: 'https://662c49130547cdcde9ddfa8f.mockapi.io/psm/'
});

export default api; 