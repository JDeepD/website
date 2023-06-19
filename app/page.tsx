import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Redis } from "@upstash/redis";

export default async function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="flex w-full h-full items-center justify-center overflow-hidden">
        <ProfileCard />
      </div>
    </main>
  );
}
