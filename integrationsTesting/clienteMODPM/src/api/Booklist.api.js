import axios from 'axios';

export const getAllBooks = async () => {
    return await axios.get('http://localhost:8000/api/books/');
};