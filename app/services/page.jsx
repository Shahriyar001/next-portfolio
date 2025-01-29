"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive, and high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS. Expertise in state management with Redux and optimized UI rendering.",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Developing robust, scalable, and secure backend systems using Node.js, Express.js, and MongoDB. Implementing RESTful APIs, authentication, and database management for seamless operations.",
  },
  {
    num: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end web application development, integrating frontend and backend technologies. Experience in building scalable MERN stack applications with advanced features like authentication, real-time data, and cloud deployment.",
  },
  {
    num: "04",
    title: "DevOps & Deployment",
    description:
      "Containerization with Docker, server management on Linux, and deployment strategies for scalable applications. Experience with CI/CD pipelines, environment configuration, and cloud deployment for production-ready systems.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                <div>
                  <div>{service.num}</div>
                  <Link href={service.num}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
