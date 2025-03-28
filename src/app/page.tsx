import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return <UserButton afterSignOutUrl="/" />

}
