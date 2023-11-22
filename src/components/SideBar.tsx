
import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";
import { SideBarMenu } from "./SideBarMenu";

const menuItems = [
    {
        path: '/dashboard/characters',
        icon: <IoLogoReact size={20} />,
        title: 'Harry Potter Characters',
        subtitle: 'Characters'
    },
    {
        path: '/dashboard/books',
        icon: <IoLogoReact size={20} />,
        title: 'Harry Potter Books',
        subtitle: 'Books'
    },

]

export const SideBar = () => {
    return (



        <div
            id="sidebar"
            className="  bg-gray-900 flex justify-center z-10  text-slate-300 sm:w-[20%] sm:left-0 sm:flex sm:flex-col sm:justify-start p-4 "
            x-show="sidenav"
        >
            <Image src={'/assets/images/logo.jpg'} width={80} height={80} alt={"Logo Image"} className="hidden md:w-[40%] md:mb-2 md:block md:mx-auto" />


            <div id="menu" className="flex justify-around items-center w-60 md:min-h-screen sm:flex-col gap-2 sm:justify-start sm:w-full">

                {
                    menuItems.map((item) => (
                        <SideBarMenu key={item.path} {...item} />
                    ))
                }

            </div>
        </div>






    )
}
