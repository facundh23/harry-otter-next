
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
            style={{ width: '400px' }}
            className=" bg-gray-900 h-12 fixed bottom-0 min-w-full flex items-center justify-center sm:min-h-screen z-10 text-slate-300 sm:w-64 sm:left-0 sm:flex sm:flex-col sm:justify-center sm:items-center"
            x-show="sidenav"
        >

            <Image src={'/assets/images/logo.jpg'} width={100} height={80} alt={"Logo Image"} className="hidden md:w-[60%] md:mb-2 md:block" />
            <div id="menu" className="flex justify-around items-center w-60 sm:h-full sm:flex-col gap-2 sm:justify-start sm:w-full">

                {
                    menuItems.map((item) => (
                        <SideBarMenu key={item.path} {...item} />
                    ))
                }

            </div>
        </div>






    )
}
