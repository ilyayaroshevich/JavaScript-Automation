/*
Задача🔥
1 шаг - Отправить запрос на получение всех постов GET https://jsonplaceholder.typicode.com/posts
2 шаг - Из полученного списка постов выбрать случайный post
3 шаг - Отправить PUT запрос (https://jsonplaceholder.typicode.com/posts/postId) для этого post-a. В Этом запросе измените title поста.
4 шаг - Вывести в консоль респонс

Гайд со всеми запросами с примерами - https://jsonplaceholder.typicode.com/guide/

можно, например, вместо fetch использовать axios https://axios-http.com/docs/intro
*/
import axios, { AxiosError, AxiosResponse } from "axios";
import * as _ from "lodash";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function getRandomPost(min: number, max: number): number {
    const post = _.random(min, max);
    return post;
}

async function Posts() {
    try {
        const PostId = getRandomPost(1, 100);
        const response: AxiosResponse<Post> = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${PostId}`);
        const postData: Post = response.data;
        const newTitle: Post = { ...postData, title: "My New TITLE" };
        const putUpdatedPost = await axios.put<Post>(`https://jsonplaceholder.typicode.com/posts/${PostId}`, newTitle);
        console.log(putUpdatedPost.data);
    } catch (error) {
        console.error((error as AxiosError<any>).toJSON())
    };
}

Posts();