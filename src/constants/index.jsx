import {
  BiServer,
  BiBrush,
  BiCodeAlt,
  BiXCircle,
  BiCheckCircle,
  BiError,
} from "react-icons/bi";
import Cisco from "../svg/certification-cisco.jsx";
import Udemy from "../svg/certification-udemy.jsx";
import Unicah from "../svg/certification-unicah.jsx";

export const SERVICE = [
  {
    title: "Web Development",
    description:
      "I like to develop web applications with the latest technologies and trends.",
    icon: BiCodeAlt,
    modalTitle: "Web Development",
    list: [
      "I enjoy developing web applications.",
      "I continuously seek to improve my skills and knowledge.",
      "My goal is to be a full stack developer.",
    ],
  },
  {
    title: "Backend Dev.",
    description:
      "Implement logic for web applications using best practices and architectures.",
    icon: BiServer,
    modalTitle: "Backend Stack",
    list: [
      "Rust + Axum + SQLx + Modql + Postgres.",
      "Python + Flask + Postgres.",
      "C# + ASP.NET + Dapper + SQLServer.",
    ],
  },
  {
    title: "Frontend Dev.",
    description:
      "I like to design websites providing a good user Experience and user interface.",
    icon: BiBrush,
    modalTitle: "Frontend Stack",
    list: [
      "React + Vite + TS + Zustand + TailwindCSS + ReactRouterDom.",
      "Nextjs + TS + Zustand + TailwindCSS.",
      "RemixRun + TS + Zustand + TailwindCSS.",
    ],
  },
];

export const WORK = [
  {
    title: "CRM API",
    subtitle: "API REST made with C# and .NET",
    link: "https://github.com/EFZR/Chat-appify",
    image: "/work-1.svg",
  },
  {
    title: "Chat - Appify",
    subtitle: "Chat App made with React and flask",
    link: "https://github.com/EFZR/Chat-appify",
    image: "/work-2.svg",
  },
  {
    title: "News App",
    subtitle: "News App made with react native",
    link: "https://github.com/EFZR/newspaper-project",
    image: "/work-3.svg",
  },
  {
    title: "CRM",
    subtitle: "Basic CRM made with django full stack framework",
    link: "https://github.com/EFZR/Django_CRM",
    image: "/work-4.svg",
  },
  {
    title: "To do list",
    subtitle: "To do list made with react django full stack framework",
    link: "https://github.com/EFZR/Django-ToDoList",
    image: "/work-5.svg",
  },
  {
    title: "Quiosco App",
    subtitle: "Quiosco App made with react swr and nextjs",
    link: "https://quiosco-app-production-5edc.up.railway.app/",
    image: "/work-6.svg",
  },
];

export const ACHIVEMENT = [
  {
    title: "Ciencias de la computación",
    subtitle: "Ingeniería en ciencias de la computación",
    link: "https://drive.google.com/file/d/1musOUfi0AuagcrcTUvaT7z-lK9LUerSE/view",
    image: <Unicah />,
  },
  {
    title: "Networks",
    subtitle: "CCNA: Introduction to Networks",
    link: "https://www.credly.com/badges/db35c34a-09d4-4502-8541-33230e1dd420/public_url",
    image: <Cisco />,
  },
  {
    title: "Networks Essentials",
    subtitle: "CCNA: Switching, Routing, and Wireless Essentials",
    link: "https://www.credly.com/badges/6f1f2d2d-9dc8-4b42-8995-08f5adb33ca8/public_url",
    image: <Cisco />,
  },
  {
    title: "Python",
    subtitle: "Universidad Python - De cero a Experto",
    link: "https://www.udemy.com/certificate/UC-dff1a774-58e2-4da5-ad39-f89ed68dab3b/",
    image: <Udemy />,
  },
  {
    title: "MySQL",
    subtitle: "SQL - Curso completo de Bases de Datos - de 0 a Avanzado",
    link: "https://www.udemy.com/certificate/UC-00afdab1-f3f9-4d29-a071-9b4f1fbcb370/",
    image: <Udemy />,
  },
];

export const TOASTYPES = {
  success: [<BiCheckCircle className="toast__icon" />, "success"],
  error: [<BiXCircle className="toast__icon" />, "error"],
  warning: [<BiError className="toast__icon" />, "warning"],
};
