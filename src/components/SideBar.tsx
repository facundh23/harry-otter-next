
import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";
import { SideBarMenu } from "./SideBarMenu";
import { usePathname } from "next/navigation";

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
            className="  bg-gray-500 flex justify-between sm:w-[20%] sm:left-0 sm:flex sm:flex-col sm:justify-start sm:items-center p-4 "
            x-show="sidenav"
        >
            <Image src={'/assets/images/logo.jpg'} width={80} height={80} alt={"Logo Image"} className="hidden md:w-[40%] md:mb-2 md:block md:mx-auto" />

            {
                menuItems.map((item) => (
                    <SideBarMenu key={item.path} {...item} />
                ))
            }


        </div>

    )
}
