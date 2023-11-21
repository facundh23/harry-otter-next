import { CharacterGrid } from "@/characters/components/CharacterGrid";
import { PotterCharacters } from "@/characters/interfaces/characters";







const getCharacters = async (): Promise<PotterCharacters[]> => {


    const data = await fetch('https://hp-api.onrender.com/api/characters')
        .then(resp => resp.json())

    return data

}


export default async function CharactersPage() {

    const characters = await getCharacters();

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Characters</h1>
            <CharacterGrid characters={characters} />
        </div >
    );
}