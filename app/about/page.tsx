import Image from "next/image";
export default function About() {
  return (
    <div>
      <main className="w-5/6 mx-auto my-auto font-bold text-4xl mt-8">
        <div className="text-4xl">About me</div>
        <div className="text-lg font-normal mt-4">
          I am a Third year undergraduate at NIT Silchar who loves exploring new
          tech. I write blogs in my spare time about things I like. I am
          currently learning about Backend Development, Databases and AWS.
          <br />
          <br />
          <span className="text-2xl font-semibold mb-4">My Techstack</span>
          <div>

          <Image
            alt="JS"
            src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
            width={40}
            height={40}
          />

          </div>
          <br />
          My interests(not equivalent to expertise):
        </div>
      </main>
    </div>
  );
}
