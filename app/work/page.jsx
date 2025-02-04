"use client";
import React, { useState } from "react";
import { notion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// const project = [
//   {
//     num: "01",
//     category: "frontent",
//     title: "project 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque fuga",
//     stack: [
//       { name: "Next.js" },
//       { name: "TypeScript" },
//       { name: "Tailwind" },
//       { name: "Next-Auth" },
//       { name: "MongoDB" },
//     ],
//     image: '',
//     live: '',
//     github: ''
//   },
// ];

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "Car Hub",
    description:
      "A rent-a-car and repair booking website built with Next.js, allowing users to book cars directly and view detailed information.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Next-Auth" },
      { name: "MongoDB" },
    ],
    image: "/carhub.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "full-stack",
    title: "Skatch Book",
    description:
      "An interactive sketching platform where users can create, save, and collaborate on sketches in real-time using Socket.io.",
    stack: [
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Tailwind" },
      { name: "Socket.io" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
    image: "/skatch.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "full-stack",
    title: "Hasan Dental Care",
    description:
      "A dental clinic management system that enables appointment bookings, patient reviews, and separate user/admin dashboards.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Daisy UI" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/hasan.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent  transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              <p className="text-white/60 text-sm">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[468px] relative group flex justify-center items-center bg-pink-50/20 ">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            {/* <Link>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BsArrowUpRight />
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </Link> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
