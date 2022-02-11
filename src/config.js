import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://media-app2.herokuapp.com/"
})