import {NextResponse} from "next/server";

// pages/api/details.js
const personalDetails = {
  name: "henry okafor",
  firstName: ["H", "E", "N", "R", "Y"],
  lastName: ["O", "K", "A", "F", "O", "R"],
  position: "front end developer now",
  email: "okaforhenry01@gmail.com",
  githubUserName: "castelstack",
  description:
    "Experienced software engineer with a strong focus on creating efficient and scalable user-facing systems based on cohesive design blueprints. Dedicated to achieving company goals and objectives while leading and supporting teams.",
  resumeLink: "https://docs.google.com/document/d/1aG0vStz6T3MPsEubpvDT_nZP92vPWw6G6hnsYXivmzs",
};

export async function GET() {
  return NextResponse.json(personalDetails);
}
