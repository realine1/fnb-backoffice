import SharedLayout from "@/components/layout";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <SharedLayout>
      <div className="h-screen">
      <p>Dashboard</p>
      <Button color="primary">Next UI</Button>
      </div>
      <div className="h-screen"></div>
    </SharedLayout>
  );
}
