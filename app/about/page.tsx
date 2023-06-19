import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";

const programminglanguages = [
  "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
  "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
  "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
  "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
  "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png",
  "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
  "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
  "https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png",
  "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
  "https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png",
];

const frameworks = [
  "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
  "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
  "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",

  "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
  "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png",
];

const tools = [
  "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
  "https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png",
  "https://user-images.githubusercontent.com/25181517/192108889-232b3431-a585-4b36-a62d-9078bd3641d9.png",
  "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png",
  "https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png",
  "https://user-images.githubusercontent.com/25181517/186884150-05e9ff6d-340e-4802-9533-2c3f02363ee3.png",
  "https://user-images.githubusercontent.com/25181517/186884156-e63da389-f3e1-4dca-a6c1-d76e886ba22a.png",
  "https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png",
  "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png",
];

const socials = [
  {
    image: "https://cdn.simpleicons.org/discord",
    uri: "https://discord.gg/e6sFF3Q9rc",
  },
  {
    image: "https://cdn.simpleicons.org/twitter",
    uri: "https://twitter.com/JdeepD07/",
  },
  {
    image: "https://cdn.simpleicons.org/linkedin",
    uri: "https://www.linkedin.com/in/jdeepd",
  },
  {
    image: "https://cdn.simpleicons.org/stackoverflow",
    uri: "https://stackoverflow.com/users/12982627/jdeep",
  },
];

export default function About() {
  return (
    <div>
      <main className="w-5/6 mx-auto my-auto font-bold text-4xl mt-8 mb-2">
        <div className="text-4xl">About me</div>
        <div className="text-lg font-normal mt-4">
          I am a Third year undergraduate at NIT Silchar who loves exploring new
          tech. I write blogs in my spare time about things I like. I am
          currently learning about Backend Development, Databases and AWS.
          <br />
          <br />
          <div className="text-2xl font-semibold pb-4">My Techstack</div>
          <div className="text-4xl flex gap-4 flex-wrap">
            {programminglanguages.map((uri) => (
              <Image
                key={randomUUID()}
                width={40}
                height={40}
                src={uri}
                alt=""
              />
            ))}
          </div>
          <br />
          <div className="text-4xl flex gap-4 flex-wrap">
            {frameworks.map((uri) => (
              <Image
                key={randomUUID()}
                width={40}
                height={40}
                src={uri}
                alt=""
              />
            ))}
          </div>
          <br />
          <div className="text-4xl flex gap-4 flex-wrap">
            {tools.map((uri) => (
              <Image
                key={randomUUID()}
                width={40}
                height={40}
                src={uri}
                alt=""
              />
            ))}
          </div>
          <br />
        </div>
        <div className="text-4xl mb-2">My Socials</div>
        <div className="text-4xl flex gap-4 flex-wrap">
          {socials.map((info) => (
            <Link target="_blank" key={randomUUID()} href={info.uri}>
              <Image
                key={randomUUID()}
                width={40}
                height={40}
                src={info.image}
                alt=""
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
