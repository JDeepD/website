"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProfileCard.module.css";
import GlitchText from "../GlitchText/GlitchText";

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
  {
    image: "https://cdn.simpleicons.org/github",
    uri: "https://github.com/jdeepd",
  },
];

export default function ProfileCard() {
  const [jdeepd, setJdeepd] = useState("JDEEPD");
  const [knowMore, setKnowMore] = useState("Know more 🡲");
  const [resume, setResume] = useState("Resume 🡲");
  const [projects, setProjects] = useState("Projects 🡲");
  const [blog, setBlog] = useState("Blog 🡲");
  const date = new Date();
  return (
    <main>
      <div className={styles.container}>
        {/* <div className={styles.backblur}></div> */}
        <div className="flex justify-between px-5 pt-2">
          <span className={styles.name}>{date.toJSON().slice(0, 10)}</span>
          <span className={styles.name}>
            <GlitchText original="JDEEPD" text={jdeepd} setText={setJdeepd} />
          </span>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div>
            <span>Student</span> ・ <span>Dev</span> ・ <span>Blogger</span>
          </div>
          <Link href={"/about"} className="hover:underline hover:text-blue-700">
            <GlitchText
              original="Know more 🡲"
              text={knowMore}
              setText={setKnowMore}
            />
          </Link>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          {socials.map((info, idx) => (
            <Link target="_blank" key={idx} href={info.uri}>
              <Image key={idx} width={30} height={40} src={info.image} alt="" />
            </Link>
          ))}
        </div>
        <div className="flex gap-6 mt-4 justify-center">
          <Link href={"https://drive.google.com/file/d/1uARDiv2rlOX4P4qSQhS4oRjWaC9O5NH1/view"} target="_blank" className="hover:underline hover:text-blue-700">
            <GlitchText original="Resume 🡲" text={resume} setText={setResume} />
          </Link>

          <Link href={"/posts"} className="hover:underline hover:text-blue-700">
            <GlitchText original="Blog 🡲" text={blog} setText={setBlog} />
          </Link>

          <Link href={"/about"} className="hover:underline hover:text-blue-700">
            <GlitchText
              original="Projects 🡲"
              text={projects}
              setText={setProjects}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
