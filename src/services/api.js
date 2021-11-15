import axios from 'axios'
import linkApi from '../config/linkApi.json'

const api = axios.create({
    baseURL: linkApi.link
})

export default api