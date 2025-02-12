"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Covid Landing Page",
    title: "Covid Landing Page",
    description:
      " There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to",
    stack: [
      { name: "HTML" },
      { name: "SCSS" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    images: "/assets/work/Covid.png",
    live: "https://covid-mu-eight.vercel.app/",
    github: "https://github.com/VannThanhh/Covid",
  },
  {
    num: "02",
    category: "WrenMaster",
    title: "WrenMaster",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus exercitationem voluptatum. Autem aspernatur tempora at consequatur?",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    images: "/assets/work/Wren.png",
    live: "https://wren-master-beta.vercel.app/",
    github: "https://github.com/VannThanhh/WrenMaster",
  },
  {
    num: "03",
    category: "Grilli-Masterr",
    title: "Grilli-Masterr",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus exercitationem voluptatum. Autem aspernatur tempora at consequatur?",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    images: "/assets/work/Grilli.png",
    live: "https://grilli-masterr.vercel.app/",
    github: "https://github.com/VannThanhh/Grilli-Masterr",
  },
  {
    num: "04",
    category: "Personal Portfolio Website",
    title: "Personal Portfolio Website",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus exercitationem voluptatum. Autem aspernatur tempora at consequatur?",
    stack: [
      { name: "HTML" },
      { name: "SCSS" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    images: "/assets/work/Protfile.png",
    live: "https://portfolio-gamma-murex-67.vercel.app/",
    github: "https://github.com/VannThanhh/Portfolio",
  },
  {
    num: "05",
    category: "Foodie",
    title: "Foodie",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus exercitationem voluptatum. Autem aspernatur tempora at consequatur?",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    images: "/assets/work/Foodie.png",
    live: "https://foodie-eta-three.vercel.app/",
    github: "https://github.com/VannThanhh/Foodie",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handSlideChange = (swiper) => {
    const currenIndex = swiper.activeIndex;

    setProject(projects[currenIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl: justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* category  */}
              <div className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </div>

              {/* description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {/* remove the last comma */}
                      {item !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>live</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>Github</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              className="xl:h-[520px] mb-12"
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={project.images}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none font-bold"
                btnStyles="bg-accent hover:bg-accent-hover text-primary items-center transition-all w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
