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
        getPost: (postId: number) => {
            return axiosInstance.get(`posts/${postId}`)
        },
        getPosts: () => {
            return axiosInstance.get(`posts`).then(res => (res.data))
        },
        setNewPost: function (body: string) {
            return axiosInstance.post(`posts`, {body})
        },
        updatePost: (postId: number, body: string) => {
            return axiosInstance.put(`posts/${postId}`, {body})
        },
        deletePost: (postId: number) => {
            return axiosInstance.delete(`posts/${postId}`)
        }

    }

    //Получение постов
    API.getPosts()
        .then(posts => {
            let allPosts = [];
            let i = 0, max = posts.length;
            console.log(posts)
            for (; i < max; i += 1) {
                allPosts.push(posts[i]);
            }
            allPosts.map(post => {
                console.log(`---- ${post.title} ----`);
            });
        });

    let style = ['padding: 1rem;',
        'background: linear-gradient( green, white);',
        'text-shadow: 0 2px orangered;',
        'font: 1.3rem/3 Georgia;',
        'color: white;'].join('');

    // Добавление поста
    API.setNewPost(JSON.stringify({title: 'lergnom', body: 'example', userId: 4}))
        .then(resolve => {
            console.warn('ADD POST\n axios POST = ', resolve);
            //@ts-ignore

            console.log('%c%s', style, resolve.status)
        });


    //Обновление поста
    API.updatePost(4, JSON.stringify({title: 'lergnom', body: 'lergnom', userId: 4}))
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })

    //Получить пост по id
    API.getPost(1).then(res => {
        console.log('POST ID ID ', res)
    })

    API.deletePost(1)
        .then(res => console.log('POST DELETE', res))


    const getPostById = async (id: number) => {
        try {
            return await API.getPost(id).then(post => {
                throw 'error 404'
                return post.data.title
            })
        } catch (err) {
            console.log('error', err)
        }
    }

    console.log('Get post by ID ', getPostById(50))
}

export default lesson11_3

