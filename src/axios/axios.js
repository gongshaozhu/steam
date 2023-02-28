import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? 'http://game-rent-api.fat.springdance.cn/' : 'http://game-rent-api.fat.springdance.cn/'
console.log(process.env.NODE_ENV);
const instance = axios.create({
    baseURL,
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: '',
    }
})
instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response.data.data
}, function (error) {
    return Promise.reject(error)
})

export default instance

