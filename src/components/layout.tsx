'use client'
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function SharedLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    const [isSidebarOpen, openSidebar] = useState(false);

    useEffect(() => {
        let width = document.body.offsetWidth;
        if (width >= 1280) {
            openSidebar(true);
        }
    },[])

    return (
        <div className="flex justify-start items-start">
            <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>
            <main className="h-screen overflow-y-auto bg-neutral-100 w-full">
                <Navbar openSideBar={openSidebar} isSidebarOpen={isSidebarOpen}></Navbar>
                <div className="p-3">{children}</div>
            </main>
        </div>
    );
}
