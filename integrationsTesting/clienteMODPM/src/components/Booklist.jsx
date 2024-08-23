import { useEffect, useState } from "react";
import {getAllBooks} from "../api/Booklist.api";


export function Booklist() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const books = await getAllBooks();
            setBooks(books.data);
        }
        fetchBooks();
    }, []);
    return <div>Booklist

        {books.map(book => (
            <div key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </div>
        ))}
    </div>;
}