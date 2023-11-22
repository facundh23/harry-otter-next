import React from 'react'
import { BooksProps } from '../interfaces/books'


interface Props {
    book: BooksProps
}

export const BooksCard = ({ book }: Props) => {
    const { id, libro, titulo_original, fecha_de_lanzamiento, autora, descripcion } = book
    return (
        <>

            <div className="p-4 w-[30%]">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold">{libro}</h2>
                    <p className="font-bold text-2xl">{titulo_original}</p>
                    <p className="font-bold">{descripcion}</p>
                    <p className="font-bold">{autora}</p>
                    <p className="font-bold">{fecha_de_lanzamiento}</p>
                </div>
            </div>
        </>
    )
}