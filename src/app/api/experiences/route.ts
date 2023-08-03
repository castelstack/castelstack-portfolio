import {NextResponse} from "next/server";

// pages/api/details.js
const experiences = {
  description:
    "Professional experience from various companies, working with a team and delivering valued products",

  experiences: [
    {
      companyName: "Smitiv Mobiles Technologies Pte Ltd",
      duration: "nov 2021 - current",
      position: "Lead Frontend Developer (Blockchain Lab)",
      roles: [
        "Structured and developed the frontend development environment thus enabling fast bug tracking, uniform naming convention and a decrease in the time spent on onboarding new developers by 30%.",
        "Spearheaded the total overhaul of existing web applications, including state memoisation, thereby reducing rerendering of non-state-concerned components, which led to a 15% increase in overall performance.",
        "Designed and developed NFT Marketplaces integrated with Metamask to enable users to connect and transact on the web3 while utilizing the platform. This platform has currently exceeded 1000+ NFT transactions.",
      ],
    },
    {
      companyName: "Hire Us",
      duration: "1year and 8months",
      position: "Frontend Developer ",
      roles: [
        "Transitioned to using React hooks for local state updates and only using Redux for truly global state updates across the platform, which reduced latency by 10%.",
        "Implemented a real-time search feature that allows users to search for artisans on the platform seamlessly based on their preferred location and service category for hire. This led to overall customer satisfaction.",
        "Setup and deployed the client-side to Vercel via GitHub for easy visualization for teams working in the non-development aspects of the project, thus increasing the speed at which fixes and new features are reviewed by 20%.",
      ],
    },
    {
      companyName: "Varscon Group",
      duration: "5months",
      position: "Frontend Developer ",
      roles: [
        "Refined the user interface for every seasonal exhibition as participants increased exponentially every season, thereby enabling accessibility and smooth workflow across the platform.",
        "Integrated a 3rd-party payment gateway system for voting and over 120,000 votes have been successfully cast without complaint.",
        "Collaborated extensively with the client and ensured that fixes and new features were implemented following each demo. Satisfactory level was up by 80%.",
      ],
    },
    {
      companyName: "THE CHANGE INITIATIVE",
      duration: "1year and 10months",
      position: "Lead Frontend Developer (Blockchain Lab)",
      roles: [
        "Implemented aesthetically pleasing designs which appealed to the client, thereby increasing satisfactory level by 80%.",
        "Mitigated the use of external packages by writing specific components invoking the same effect which made projects lightweight and improved the response time of web applications by 10%.",
        "Lauded for communication and soft skills displayed during my time with the organization.",
      ],
    },
  ],
};

export async function GET() {
  return NextResponse.json(experiences);
}
