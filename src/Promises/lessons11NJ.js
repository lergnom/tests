// 6) в файле lesson_3.ts реализовать методы get, post, put, delete через axios
// Ответы можно выводить в консоль
import axios from 'axios';

const configJSPHLD =  {
    baseUrl: 'https://jsonplaceholder.typicode.com/'
};
const axiosInstance = axios.create()







//
// import axios from 'axios';
//
// const configOMB = {
//     baseURL: 'http://www.omdbapi.com/',
// };
// const key = '?apikey=7c250346';
// const axiosInstance = axios.create(configOMB);
//
// const API = {
//     searchFilmsByTitle: (title: string) => {
//         return axiosInstance.get(`${key}&t=${title}`)
//             .then(response => response.data)
//     },
//     searchFilmsByType: (title: string, type: string) => {
//         return axiosInstance.get(`${key}&t=${title}&type=${type}`)
//             .then(response => response.data)
//     }
// };