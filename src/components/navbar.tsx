'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarProp {
    openSideBar: React.Dispatch<React.SetStateAction<boolean>>
    isSidebarOpen: boolean
}

const Navbar: React.FC<NavbarProp> = ({openSideBar, isSidebarOpen}) => {
    const pathname = usePathname();
    const [urls, setUrls] = useState<string[]>([]);

    useEffect(() => {
        let url = pathname.slice(1).split('/');
        setUrls(url);
    },[])

    return (
        <nav className="w-full h-14 bg-gradient-to-r from-white from-75% to-yellow-400 to-[200%] flex justify-between items-center gap-4 px-3 sticky top-0">
        <div className="flex justify-start items-center gap-3">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={() => openSideBar(!isSidebarOpen)}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
            </svg>
            <p>
                {urls.map((url: string, index: number) => (
                    <span key={index} className="capitalize text-base font-semibold">{url?url:'Dashboard'} {index === urls.length-1?'':' / '}</span>
                ))}
            </p>
        </div>
        </nav>
    );
};

export default Navbar;
