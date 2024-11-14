import SharedLayout from "@/components/layout"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Item",
  description: "Item List",
};

const Item = () => {
    return(
        <SharedLayout>
            <p>Item</p>
        </SharedLayout>
    )
}

export default Item