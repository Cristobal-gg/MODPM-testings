import { useEffect, useState } from "react";
import {getAllBooks} from "../api/Booklist.api";
import { Bookcard } from "./Bookcard";

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
            <Bookcard key={book.id} title={book.title} author={book.author} />
        ))}
    </div>;
}