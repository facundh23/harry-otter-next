import React from 'react'
import { BooksProps } from '../interfaces/books'
import { BooksCard } from './BookData'


interface Props {
    books: BooksProps[]
}
export const BookData = ({ books }: Props) => {
    console.log(books)
    return (
        <div className="md:flex md:flex-wrap md:w-[100%] h-screen md:justify-center overflo-y-scroll">

            {
                books.map(book => (
                    <BooksCard key={book.id} book={book} />

                ))
            }

        </div>
    )
}


