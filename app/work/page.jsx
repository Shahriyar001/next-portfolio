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
import WorkSliderBtns from "@/components/WorkSliderBtns";

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
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[35%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent  transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              <p className="text-white/60 text-sm">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
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
          <div className="w-full xl:w-[65%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      <div className="absolute top-4 bottom-0 w-full h-full bg-black/10 z-10"></div>
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
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-300 hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
