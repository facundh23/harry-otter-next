import Link from "next/link"
import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"
import { PotterCharacters } from "../interfaces/characters"


interface Props {
    character: PotterCharacters
}

const CharacterCard = ({ character }: Props) => {
    const { id, gender, name, image } = character
    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col gap-2 bg-white rounded overflow-hidden shadow-lg">
                <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b w-full ">
                    <Image
                        key={id}
                        src={image}
                        width={100}
                        height={100}
                        alt={name}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <p className="text-sm text-gray-100">John@Doe.com</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemon/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Info Pokemon
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center" >
                        <div className="text-red-600">
                            <IoHeartOutline />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                No Favorite / Favorite
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CharacterCard
