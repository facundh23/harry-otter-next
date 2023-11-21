'use client';

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
        <div>SideBarMenu</div>
    )
}
