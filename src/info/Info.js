import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Ayush",
  lastName: "Sharma",
  initials: "As",
  position: "a MERN Stack Developer",
  selfPortrait: self, 
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "â˜•",
      text: "fueled by coffee",
    },
    {
      emoji: "ðŸŒŽ",
      text: "based in the India",
    },
    {
      emoji: "ðŸ’»",
      text: "competitive programmer",
    },
    {
      emoji: "ðŸ“–",
      text: "B.Tech Student at Delhi Technological University",
    },
    {
      emoji: "ðŸ“§",
      text: "ayushs8800@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.linkedin.com/in/ayush-sharma-663ab4202/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/ayushs8800",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/ayush-sharma-663ab4202/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "I am Ayush Sharma, a passionate MERN stack developer and a dedicated student pursuing a B.Tech degree at Delhi Technological University. With a strong foundation in Data Structures and Algorithms (DSA), and competitive programming, I strive to create efficient and elegant solutions to complex problems.",
  skills: {
    proficientWith: [
      "C++",
      "React",
      "Git",
      "Node.Js",
      "MongoDB",
      "Html",
      "Css",
      "Express"
    ],
    exposedTo: ["Typescript", "Sass"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "ðŸ“–",
    },
    {
      label: "chess",
      emoji: "â™Ÿ",
    },
    {
      label: "movies",
      emoji: "ðŸŽ¥",
    },
    {
      label: "stargazing",
      emoji: "âœ¨",
    },
  ],
  portfolio: [
    {
      title: "Portfolio",
      live: "https://coruscating-lily-d3e7a1.netlify.app/", 
      source: "https://github.com/ayushs8800/portfolio.git", 
      image: mock1,
    },
    {
      title: "MERN E-Commerce",
      live: "https://mern-e-store.onrender.com",
      source: "https://github.com/ayushs8800/mern-e-commerce.git",
      image: mock2,
    },
    {
      title: "HuffMan Encoding",
      live: "https://64b5145a1107160485b2638a--zingy-sundae-1a3c5e.netlify.app/",
      source: "https://github.com/ayushs8800/huffman-encoding.git",
      image: mock3,
    },
  ],
};
