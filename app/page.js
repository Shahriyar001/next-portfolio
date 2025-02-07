import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

import React from "react";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-green-300">Shahriyar Mahbub</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegent digital experiences and I am
              proficient in various programming language and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center  gap-8">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-green-300 uppercase "
              >
                <a
                  href="/ShahriyarMahbub-resume.pdf"
                  download="ShahriyarMahbub_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <MdOutlineFileDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-green-500 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
