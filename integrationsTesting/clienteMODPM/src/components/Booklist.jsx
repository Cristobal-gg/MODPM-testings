import { useEffect } from "react";
import {getAllBooks} from "../api/Booklist.api";


export function Booklist() {

    useEffect(() => {
        function fetchBooks() {
            const books = getAllBooks();
            console.log(books);
        }
        fetchBooks();
    }, []);
    return <div>Booklist</div>;
}