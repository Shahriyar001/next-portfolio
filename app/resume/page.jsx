"use client";
import { icons } from "lucide-react";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { delay, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Passionate MERN stack developer with a strong foundation in web development. Experienced in building scalable applications, optimizing performance, and delivering high-quality code.",
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

const courses = {
  icon: <FaLaptopCode />,
  title: "Completed Courses",
  description:
    "Hands-on experience with MERN stack, JavaScript mastery, and full-stack development through structured online programs and real-world projects.",
  items: [
    {
      academy: "Programming Hero",
      course: "Next Level Web Development",
      duration: "2024-2025",
    },
    {
      academy: "Programming Hero",
      course: "MERN Stack Development",
      duration: "2023-2024",
    },
    {
      academy: "Learn with Sumit",
      course: "JavaScript Mastery",
      duration: "2023-2023",
    },
    {
      academy: "Programming Hero",
      course: "Next Level Web Development",
      duration: "2024-2025",
    },
    {
      academy: "Programming Hero",
      course: "MERN Stack Development",
      duration: "2023-2024",
    },
    {
      academy: "Learn with Sumit",
      course: "JavaScript Mastery",
      duration: "2023-2023",
    },
  ],
};

const education = {
  icon: <FaGraduationCap />,
  title: "Education Background",
  description:
    "Pursuing a BBA degree while mastering web development. Strong analytical and problem-solving skills with a keen interest in tech-driven business solutions.",
  items: [
    {
      institution: "Dhaka College",
      degree: "BBA (Management)",
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
  title: "Technical Skills",
  description:
    "Proficient in front-end and back-end technologies. Experienced in React, Next.js, Node.js, and database management. Passionate about clean code and best practices.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
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
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{courses.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {courses.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {courses.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-green-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <p className="text-white/60">{item.academy}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-green-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="text-6xl group-hover:text-green-300 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="bg-white text-primary p-2 rounded rounded-md">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
