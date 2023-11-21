import { PotterCharacters } from "../interfaces/characters"
import CharacterCard from "./CharacterCard"

interface Props {
    characters: PotterCharacters[]
}

type PotterCharacter = {
    character: PotterCharacter
}

export const CharacterGrid = ({ characters }: Props) => {
    return (
        <div className="md:flex md:flex-wrap md:w-[100%] h-screen md:justify-center overflo-y-scroll">

            {
                characters.map(character => (
                    character.image ? <CharacterCard key={character.id} character={character} /> : ''

                ))
            }

        </div>
    )
}
