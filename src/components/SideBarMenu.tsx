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
        <Link href={path} className={`w-[70%]  sm:w-full inline-flex justify-center items-center sm:flex-col sm:gap-2 border-b border-slate-700 py-1 ${pathName === path ? 'bg-blue-800' : 'bg-red-800'}  hover:bg-white/5 transition ease-linear duration-150`}>
            <div className="hidden md:block">
                {icon}
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <span className="text-[9px] md:text-sm font-bold leading-5 text-white">{title}</span>
                <span className="text-xs hidden md:block">{subtitle}</span>
            </div>
        </Link>
    )
}
