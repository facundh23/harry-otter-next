import React from 'react'
import { BooksProps } from '../interfaces/books'
import { BooksCard } from './BookData'


interface Props {
    books: BooksProps[]
}
export const BookData = ({ books }: Props) => {

    return (
        <div className="md:flex md:flex-wrap md:w-full md:min-h-screen md:justify-center bg-gray-900">

            {
                books.map(book => (
                    <BooksCard key={book.id} book={book} />

                ))
            }

        </div>
    )
}


