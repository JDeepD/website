import ProfileCard from "./components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="flex w-full h-full items-center justify-center overflow-hidden">
        <ProfileCard />
      </div>
    </main>
  );
}
