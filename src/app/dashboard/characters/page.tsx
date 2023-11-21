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
        <div className=" bg-slate-400 flex flex-col items-center h-min-screen md:flex-row md:w-full md:gap-10  md:flex-wrap md:items-center justify-center p-6">
            <CharacterGrid characters={characters} />
        </div >
    );
}