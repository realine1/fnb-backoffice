import Image from "next/image";
import Link from "next/link";

interface SidebarProp {
    isSidebarOpen: boolean
}

const Sidebar:React.FC<SidebarProp> = ({isSidebarOpen}) => {
  return (
    <aside className={`bg-gradient-to-b from-white from-75% to-yellow-400 to-[200%] h-screen overflow-x-hidden shrink-0 ${isSidebarOpen?'w-64':'w-0 md:w-16'}`}>
      <div className="flex justify-start items-center gap-3 h-14 px-3">
        <Image className="shrink-0" src="/icon.svg" alt="logo" height={28} width={28} />
        <p className="w-full whitespace-nowrap overflow-x-hidden text-ellipsis font-semibold">Store Name</p>
      </div>
      <div className="flex flex-col gap-3">
      <Link href='/'>Dashboard</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/menu/item'>Item</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
