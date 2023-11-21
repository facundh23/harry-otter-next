import { BookData } from "@/books/components/BooksGrid";
import { BooksProps } from "@/books/interfaces/books";

const getBooks = async (): Promise<BooksProps[]> => {
    const data = await fetch('https://harry-potter-api.onrender.com/libros')
        .then(resp => resp.json())
    return data
}

export default async function BooksPage() {
    const books = await getBooks();
    return (
        <div className=" bg-slate-400 flex flex-col items-center h-min-screen md:flex-row md:w-full md:gap-10  md:flex-wrap md:items-center justify-center p-6">
            <BookData books={books} />
        </div >
    );
}