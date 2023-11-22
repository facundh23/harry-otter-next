import { PotterCharacters } from "../interfaces/characters"
import CharacterCard from "./CharacterCard"

interface Props {
    characters: PotterCharacters[]
}



export const CharacterGrid = ({ characters }: Props) => {
    return (
        <div className="md:flex md:flex-wrap md:min-h-screen md:justify-center overflo-y-scroll bg-gray-700">

            {
                characters.map(character => (
                    character.image ? <CharacterCard key={character.id} character={character} /> : ''

                ))
            }

        </div>
    )
}
