import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    (config.headers ??= {}).Authorization =  ` Bearer ${window.localStorage.getItem('token')}`
    return config
})

export default instance