export function Bookcard(book) {
    return (
        <div key={book.id}>
                <hr/>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
        </div>
    );
}