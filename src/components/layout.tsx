"use client";
import {
  Button,
  Link,
  Listbox,
  ListboxItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
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
        {/* <Listbox
          aria-label="User Menu"
          onAction={(key) => console.log(key)}
          className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium h-screen"
          itemClasses={{
            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
          }}
        >
          <ListboxItem key="issues">Issues</ListboxItem>
          <ListboxItem key="pull_requests">Pull Requests</ListboxItem>
          <ListboxItem key="discussions">Discussions</ListboxItem>
          <ListboxItem key="actions">Actions</ListboxItem>
          <ListboxItem key="projects">Projects</ListboxItem>
          <ListboxItem
            key="releases"
            className="group h-auto py-3"
            textValue="Releases"
          >
            <div className="flex flex-col gap-1">
              <span>Releases</span>
              <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                <span className="text-tiny text-default-600">
                  @nextui-org/react@2.0.10
                </span>
                <div className="flex gap-2 text-tiny">
                  <span className="text-default-500">49 minutes ago</span>
                  <span className="text-success">Latest</span>
                </div>
              </div>
            </div>
          </ListboxItem>
          <ListboxItem key="contributors">Contributors</ListboxItem>
          <ListboxItem key="watchers">Watchers</ListboxItem>
          <ListboxItem
            key="license"
            endContent={
              <span className="text-small text-default-400">MIT</span>
            }
          >
            License
          </ListboxItem>
        </Listbox> */}
        <div className="w-full p-3 xl:p-5 h-screen overflow-y-auto">
        {children}
        </div>
      </div>
    </>
  );
}
