import {NextResponse} from "next/server";

// pages/api/details.js
const skills = {
  description: "My skills acquired from vast project worked on and from frontend developement",
  skills: [
    {
      name: "HTML",
      level: `100%`,
      color: "#e78632",
    },
    {
      name: "CSS",
      level: `90%`,
      color: "#e78632",
    },
    {
      name: "Javascript",
      level: `80%`,
      color: "#e78632",
    },
    {
      name: "React",
      level: `90%`,
      color: "#e78632",
    },
    {
      name: "Next",
      level: `90%`,
      color: "#e78632",
    },
    {
      name: "sass",
      level: `75%`,
      color: "#e78632",
    },

    {
      name: "Typescript",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "Git",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "VSCode",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "Ethers",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "Web3Js",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "vercel",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "tailwindcss",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "figma",
      level: `98%`,
      color: "#e78632",
    },
    {
      name: "redux-reducer",
      level: `98%`,
      color: "#e78632",
    },
  ],
};

export async function GET() {
  return NextResponse.json(skills);
}
