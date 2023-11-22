'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string
}

export const SideBarMenu = ({ path, icon, title, subtitle }: Props) => {
    const pathName = usePathname();

    return (
        <Link href={path} className={`w-36 inline-flex justify-center items-center sm:flex-col sm:gap-2 border-b border-slate-700 py-1 ${pathName === path ? 'bg-blue-400' : 'bg-red-400'}  hover:bg-white/5 transition ease-linear duration-150 sm:w-32 lg:w-52`}>
            <div className="hidden md:block text-white font-bold">
                {icon}
            </div>
            <div className="flex flex-col items-center justify-center text-center md:min-w-full">
                <span className="text-[9px] md:text-sm font-bold leading-5 text-white">{title}</span>
                <span className="text-xs hidden md:block">{subtitle}</span>
            </div>
        </Link>
    )
}
