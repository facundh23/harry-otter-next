import React from 'react'
import { BooksProps } from '../interfaces/books'


interface Props {
    book: BooksProps
}

export const BooksCard = ({ book }: Props) => {
    const { libro, titulo_original, fecha_de_lanzamiento, autora, descripcion } = book
    return (
        <div className="p-4">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-white">{libro}</h2>
                <p className="font-bold text-2xl text-white">{titulo_original}</p>
                <p className="font-bold text-white">{descripcion}</p>
                <p className="font-bold text-white">{autora}</p>
                <p className="font-bold text-white">{fecha_de_lanzamiento}</p>
            </div>
        </div>

    )
}