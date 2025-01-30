"use client";
import { icons } from "lucide-react";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodejs,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReaddotcv,
  SiRedux,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip } from "@/components/ui/tooltip";
import { delay, motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laboriosam.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shahriyar Mahbub",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801778626295",
    },
    {
      fieldName: "Learning Exp",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Shahriyar Mahbub",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "shahriyarmahbub55@gamil.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla, Hindi",
    },
  ],
};

const Courses = {
  icon: <FaLaptopCode />,
  title: "Complete Courses",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis natus accusantium?",
  items: [
    {
      academy: "Programing Hero",
      course: "Next Level Web Development",
      duration: "2024-2025",
    },
    {
      academy: "Programing Hero",
      course: "Mern Stack Development",
      duration: "2023-2024",
    },
    {
      academy: "Learn with sumit",
      course: "javascript mastery",
      duration: "2023-2023",
    },
  ],
};

const education = {
  icon: <FaGraduationCap />,
  title: "Field of Expertise",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis natus accusantium?",
  items: [
    {
      institution: "Dhaka College",
      degree: "BBA(Management)",
      duration: "2021-2025",
    },
    {
      institution: "Comilla Victoria Govt College",
      degree: "Business Studies",
      duration: "2017-2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa!",
  skills: [
    {
      icon: <FaHtml5 />,
      name: "HTMl 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "Reat.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaNodejs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 bg-slate-400 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList>
            <TabsTrigger>Courses</TabsTrigger>
            <TabsTrigger>Courses</TabsTrigger>
            <TabsTrigger>Courses</TabsTrigger>
            <TabsTrigger>Courses</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full mx-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="courses" className="w-full">
              courses
            </TabsContent>
          </div>
        </Tabs>
      </div> */}
    </motion.div>
  );
};

export default Resume;
