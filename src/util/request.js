import axios from 'axios'

//创建axios实例
const request = axios.create({
    baseURL: '/api',
    timeout: 60000 //请求超时时间
})

export default request
