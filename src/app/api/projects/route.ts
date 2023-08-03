import {NextResponse} from "next/server";

// pages/api/details.js
const projects = [
  {
    name: "Tournest",
    icon: "/images/tournest.png",
    stack: ["next", "tailwindcss", "git", "javascript", "CSS"],
    description:
      "This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",
    left: true,
    link: "https://tournest.art",
  },
  {
    name: "the X studio",
    icon: "/images/xstudio.png",
    left: false,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",
    link: "https://thexstudio.net",
    stack: ["react", "Typescript", "CSS", "html"],
  },

  {
    name: "hire us",
    icon: "/images/hireus.png",
    left: true,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",
    link: "https://hireus.ng",
    stack: ["react", "tailwindcss", "javascript", "CSS", "Git"],
  },

  {
    name: "SA food festival",
    icon: "/images/safood.png",
    left: false,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",
    link: "https://saafricanfoodfestival.com/",
    stack: ["next", "Typescript", "tailwindcss", "husky", "eslint"],
  },
  {
    name: "thecsaen",
    icon: "/images/cean.png",
    left: false,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",

    stack: ["react", "Typescript", "CSS", "html"],
  },
  {
    name: "Varscon",
    icon: "/images/varscon.png",
    left: true,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",

    stack: ["next", "tailwindcss", "Typescript", "CSS", "Git"],
  },
  {
    name: "the change initiative",
    icon: "/images/dci.png",
    left: false,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",

    stack: ["react", "tailwindcss", "git", "javascript", "CSS"],
  },

  {
    name: "Sman-ng",
    icon: "/images/smann.png",
    left: true,
    description:
      " This website is built to maintain a high level of stability and performance, using the best and most efficient tools available. It is also optimized to ensure a smooth, uninterrupted user experience. The web application is designed with accessibility and usability in mind, making sure that all users can have a pleasant and successful experience while visiting your website.",

    stack: ["react", "javascript", "CSS", "Git"],
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
