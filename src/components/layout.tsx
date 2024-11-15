"use client";
import {
    Link,
    Listbox,
    ListboxItem,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import { useState } from "react";

export default function SharedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar
        maxWidth="full"
        isBordered
        onMenuOpenChange={setIsMenuOpen}
        className="lg:hidden"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="flex justify-start items-start lg:gap-3 xl:gap-5">
        <div className="hidden lg:block shrink-0">
          <Listbox
            aria-label="Menu"
            onAction={(key) => console.log(key)}
            className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 min-w-52 max-w-[300px] overflow-auto shadow-small rounded-medium lg:my-3 lg:ml-3 lg:h-[calc(100vh-24px)] xl:my-5 xl:ml-5 xl:h-[calc(100vh-40px)]"
            itemClasses={{
              base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
            }}
          >
            {menuItems.map((item, index) => (
              <ListboxItem key={index}>{item}</ListboxItem>
            ))}
          </Listbox>
        </div>
        <div className="w-full p-3 xl:p-5 h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
}
