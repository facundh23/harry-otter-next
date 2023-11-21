
import Image from "next/image"

import { PotterCharacters } from "../interfaces/characters"


interface Props {
    character: PotterCharacters
}

const CharacterCard = ({ character }: Props) => {
    const { id, gender, name, image, house } = character
    return (

        <div className="p-4">
            <Image alt="gallery" width={200} height={100} src={image} />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex flex-col items-center">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{name}</h2>
                <p className="leading-relaxed">{house}</p>
            </div>
        </div>

    )
}

export default CharacterCard
