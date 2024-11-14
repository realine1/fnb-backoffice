import SharedLayout from "@/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Menu List",
};

const Menu = () => {
  return(
    <SharedLayout>
        <p>Menu</p>
    </SharedLayout>
  )
};

export default Menu;
