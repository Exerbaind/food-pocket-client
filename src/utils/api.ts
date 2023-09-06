import axios from "axios";

const appApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 1000,
})

export default appApi;