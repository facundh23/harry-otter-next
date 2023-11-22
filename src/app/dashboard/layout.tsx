import { SideBar } from "@/components/SideBar";


export default function DashBoardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col-reverse sm:w-full md:h-min-screen ">

            <div className="flex flex-col-reverse sm:flex-row">
                <SideBar />
                <div className="w-full text-slate-900">
                    {children}
                </div>
            </div>
        </div>
    );
}