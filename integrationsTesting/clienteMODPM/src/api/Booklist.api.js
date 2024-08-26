import axios from 'axios';

const booksAPI = axios.create({
    baseURL: 'http://localhost:8000/test/',
});

console.log(baseURL);
console.log(booksAPI, "proveniente de axios");

export const getAllBooks = async () => await booksAPI.get('/');

export const createBook = async (book) => await booksAPI.post('/', book);


// const cualquierAPI = axios.create({
//     baseURL: 'http://localhost:8000/api/books/',
// });

// export const getCualquier = async () => await cualquierAPI.get('/cualquiercuestion');

