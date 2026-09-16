import {
  SiPhp,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiLinux,
  SiNpm,
  SiMysql,
  SiComposer,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

import {
  TbMathFunction,
  TbBinaryTree,
  TbTrophy,
  TbCube,
  TbCpu,
  TbNetwork,
  TbLogicAnd,
  TbGauge,
} from "react-icons/tb";

import { FaMicrochip, FaHandshake } from "react-icons/fa6";

import {
  TbCrown,
  TbLayoutKanban,
  TbBulb,
  TbPuzzle,
  TbPresentation,
} from "react-icons/tb";

export const SKILLS = {
  "Web-dev & Systems": [
    { label: "PHP / Laravel", icon: <SiPhp size={18} /> },
    { label: "Node.js", icon: <SiNodedotjs size={18} /> },
    { label: "MySQL", icon: <SiMysql size={18} /> },
    { label: "composer", icon: <SiComposer size={18} /> },
    { label: "npm", icon: <SiNpm size={18} /> },
    { label: "Postman", icon: <SiPostman size={18} /> },
    { label: "Java", icon: <DiJava size={20} /> },
    { label: "C / C++", icon: <SiCplusplus size={18} /> },
    { label: "Python / Flask", icon: <SiPython size={18} /> },
    { label: "Git", icon: <SiGit size={18} /> },
    { label: "GitHub", icon: <SiGithub size={18} /> },
    { label: "Linux / Shell", icon: <SiLinux size={18} /> },
  ],
  "Core CSE": [
    { label: "Algorithms Analysis", icon: <TbMathFunction size={18} /> },
    { label: "Data Structures", icon: <TbBinaryTree size={18} /> },
    { label: "Competitive CP", icon: <TbTrophy size={18} /> },
    { label: "OOP", icon: <TbCube size={18} /> },
    { label: "OS Concepts", icon: <TbCpu size={18} /> },
    { label: "Computer Networks", icon: <TbNetwork size={18} /> },
    { label: "Logic Design", icon: <TbLogicAnd size={18} /> },
    { label: "Computer Architecture", icon: <FaMicrochip size={18} /> },
    { label: "Automatic Control", icon: <TbGauge size={18} /> },
  ],
  "Soft skills": [
    { label: "Leadership", icon: <TbCrown size={18} /> },
    { label: "Project coordination", icon: <TbLayoutKanban size={18} /> },
    { label: "Teamwork", icon: <FaHandshake size={18} /> },
    { label: "Self learning", icon: <TbBulb size={18} /> },
    { label: "Problem solving", icon: <TbPuzzle size={18} /> },
    { label: "Presentation skills", icon: <TbPresentation size={18} /> },
  ],
};
