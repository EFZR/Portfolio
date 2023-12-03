import { BiServer, BiBrush, BiCodeAlt } from "react-icons/bi"
import work1 from "../assets/work-1.svg";
import work2 from "../assets/work-2.svg";
import work3 from "../assets/work-3.svg";
import work4 from "../assets/work-4.svg";
import work5 from "../assets/work-5.svg";
import cisco from "../assets/certification-cisco.svg";
import udemy from "../assets/certification-udemy.svg";


export const SERVICE = [
  {
    title: "Web Development",
    description: "I like to develop web applications with the latest technologies and trends.",
    icon: BiCodeAlt,
    list: [
      "I enjoy developing web applications.",
      "I continuously seek to improve my skills and knowledge.",
      "My goal is to be a full stack developer.",
    ],
  },
  {
    title: "Backend Dev",
    description: "Implement logic for web applications using best practices and architectures.",
    icon: BiServer,
    list: [
      "Clean code is my goal on each project.",
      "Learn the new technologies and architecture to make functional and scalable projects.",
      "Analityc and problem solving skills."
    ],
  },
  {
    title: "Web Design",
    description: "I like to design websites providing a good user Experience and user interface.",
    icon: BiBrush,
    list: [
      "Fast and functional designs.",
      "I like to create designs that are easy to use.",
      "UX/UI design."
    ],
  }
]

export const WORK = [
  {
    title: "CRM API",
    subtitle: "API REST made with C# and .NET",
    link: "https://github.com/EFZR/Chat-appify",
    image: work1,
  },
  {
    title: "Chat - Appify",
    subtitle: "Chat App made with React and flask",
    link: "https://github.com/EFZR/Chat-appify",
    image: work2,
  },
  {
    title: "News App",
    subtitle: "News App made with react native",
    link: "https://github.com/EFZR/newspaper-project",
    image: work3,
  },
  {
    title: "CRM",
    subtitle: "Basic CRM made with django full stack framework",
    link: "https://github.com/EFZR/Django_CRM",
    image: work4,
  },
  {
    title: "To do list",
    subtitle: "To do list made with react django full stack framework",
    link: "https://github.com/EFZR/Django-ToDoList",
    image: work5,
  },
]

export const ACHIVEMENT = [
  {
    title: "Networks",
    subtitle: "CCNA: Introduction to Networks",
    link: "https://www.credly.com/badges/db35c34a-09d4-4502-8541-33230e1dd420/public_url",
    image: cisco,
  },
  {
    title: "Networks Essentials",
    subtitle: "CCNA: Switching, Routing, and Wireless Essentials",
    link: "https://www.credly.com/badges/6f1f2d2d-9dc8-4b42-8995-08f5adb33ca8/public_url",
    image: cisco,
  },
  {
    title: "Python",
    subtitle: "Universidad Python - De cero a Experto",
    link: "https://www.udemy.com/certificate/UC-dff1a774-58e2-4da5-ad39-f89ed68dab3b/",
    image: udemy,
  }
]
