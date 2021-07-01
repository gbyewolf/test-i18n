import axios from '../lib/axios.esm.js';

axios.interceptors.request.use((config) => {
    console.log('start');
    return config
  }, (error) => {
    return Promise.reject(error)
})
  
axios.interceptors.response.use((res) => {
    console.log('end');
    return res
  }, (err) => {
    return Promise.reject(err)
})

export const test = () => axios.get('../data/1/en.json')