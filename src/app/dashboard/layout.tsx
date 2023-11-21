import { SideBar } from "@/components/SideBar";

export default function DashBoardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-slate-100 w-full h-min-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex flex-col-reverse sm:flex-row">


                <SideBar />


                <div className="flex flex-col w-full h-[93vh] sm:h-screen bg-slate-500">
                    {children}
                </div>
            </div>
        </div>
    );
}