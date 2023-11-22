
import Image from "next/image"

import { PotterCharacters } from "../interfaces/characters"
import Link from "next/link"


interface Props {
    character: PotterCharacters
}

const CharacterCard = ({ character }: Props) => {
    const { id, name, image, house } = character

    return (

        <div className="p-4 flex flex-col w-64">
            <Image alt="gallery" width={200} height={100} src={image} />
            <div className="flex flex-col items-center text-white">
                <h2 className="">{name}</h2>
                <p className="">{house}</p>
                <Link href={`character/${id}`} className="font-bold underline w-40 text-center bg-red-400 p-2 rounded-lg :hover:cursor-pointer hover:bg-blue-400 transition-all duration-300">More Info</Link>

            </div>
        </div>

    )
}

export default CharacterCard
