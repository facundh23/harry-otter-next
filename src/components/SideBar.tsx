
import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";
import { SideBarMenu } from "./SideBarMenu";

const menuItems = [
    {
        path: '/dashboard/gryffindor',
        icon: <IoLogoReact size={20} />,
        title: 'Gryffindor',
        subtitle: 'Gryffindor Characters'
    },
    {
        path: '/dashboard/hufflepuff,',
        icon: <IoLogoReact size={20} />,
        title: 'Hufflepuff',
        subtitle: 'Hufflepuff Characters'
    },
    {
        path: '/dashboard/ravenclaw',
        icon: <IoLogoReact size={20} />,
        title: 'Ravenclaw',
        subtitle: 'Ravenclaw Characters'
    },
    {
        path: '/dashboard/slytherin',
        icon: <IoLogoReact size={20} />,
        title: 'Slytherin',
        subtitle: 'Slytherin Characters'
    },
]

export const SideBar = () => {
    return (



        <div
            id="sidebar"
            className=" bg-gray-900 text-slate-300 top-0 w-[100%] h-12 sm:w-[30%] sm:min-h-screen p-2 sm:flex sm:flex-col sm:items-center"
            x-show="sidenav"
        >

            <Image src={'/assets/images/logo.jpg'} width={100} height={80} alt={"Logo Image"} className="w-[60%] mb-2" />
            <div id="menu" className="flex justify-center items-center sm:h-full sm:flex-col gap-2 sm:justify-center sm:w-full">
                {/* <Link
                    href=""
                    className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out md:flex items-center"
                >
                    <IoLogoReact />
                    <span className="text-2xl">Dashboard</span>
                </Link>
                <Link
                    href=""
                    className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                    <IoLogoReact />
                    <span>Dashboard</span>
                </Link>
                <Link
                    href=""
                    className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                    <IoLogoReact />
                    <span className="">Dashboard</span>
                </Link> */}
                {
                    menuItems.map((item) => (
                        <SideBarMenu key={item.path} {...item} />
                    ))
                }

            </div>
        </div>






    )
}
