import { PotterCharacters } from "../interfaces/characters"
import CharacterCard from "./CharacterCard"

interface Props {
    characters: PotterCharacters[]
}



export const CharacterGrid = ({ characters }: Props) => {
    return (
        <div className="flex flex-col min-h-screen md:flex-row md:flex-wrap md:justify-center  bg-gray-900">

            {
                characters.map(character => (
                    character.image ? <CharacterCard key={character.id} character={character} /> : ''

                ))
            }

        </div>
    )
}
