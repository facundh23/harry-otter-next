import { SideBar } from "@/components/SideBar";

export default function DashBoardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col-reverse  bg-slate-100 sm:overflow-y-scroll sm:w-screen sm:h-screen ">

            <div className="flex">


                <SideBar />

                <div className="w-full text-slate-900">
                    {children}
                </div>
            </div>
        </div>
    );
}