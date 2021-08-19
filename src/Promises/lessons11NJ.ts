// 6) в файле lesson_3.ts реализовать методы get, post, put, delete через axios
// Ответы можно выводить в консоль
import axios from 'axios'

const lesson11_3 = () => {
    console.log("lesson 11_3");

    const configJSPHLD = {
        baseURL: 'https://jsonplaceholder.typicode.com/'
    };
    const axiosInstance = axios.create(configJSPHLD)
    const API = {
        getPosts: () => {
            return axiosInstance.get(`posts`).then(res => (res.data))
        },

    }
    //@ts-ignore
    let allPosts = [];
    const postsData = API.getPosts().then(posts => {
        let i = 0, max = posts.length;
        for (; i < max; i += 1) {
            allPosts.push(posts[i]);
        }
        //@ts-ignore
        allPosts.map( post => {
            console.log(post.title)
        } )
    })




}

export default lesson11_3

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