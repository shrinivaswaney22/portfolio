"use client";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectSliderBtns from "@/components/ProjectImageSliderBtns";

const project = [
  {
    num: "01",
    category: "frontend",
    title: "News Website",
    description: "A Basic News Website that Uses API to fetch News",
    stacks: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image_items: [
      { image: "/assets/work/news/1.png" },
      { image: "/assets/work/news/2.png" },
      { image: "/assets/work/news/3.png" },
      { image: "/assets/work/news/4.png" },
    ],
    github: "https://github.com/shrinivaswaney22/",
    current_details: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Social Media Website",
    description:
      "A Basic Social Media Website that allows user to create,view and delete posts",
    stacks: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image_items: [{ image: "/assets/work/social/s1.png" }],
    github: "https://github.com/shrinivaswaney22/",
    current_details: "",
  },
  {
    num: "03",
    category: "React",
    title: "Myntra Semi Clone",
    description:
      "A semi functional Myntra React Clone that allows user to add and delete items from/to Wishlist, Bag and view the total pricing of items in the Bag",
    stacks: [{ name: "React.js" }],
    image_items: [
      { image: "/assets/work/myntra/m1.png" },
      { image: "/assets/work/myntra/m2.png" },
      { image: "/assets/work/myntra/m3.png" },
      { image: "/assets/work/myntra/m4.png" },
      { image: "/assets/work/myntra/m5.png" },
    ],
    github: "https://github.com/shrinivaswaney22/",
    current_details: "",
  },
  {
    num: "04",
    category: "Node",
    title: "Url Shortner",
    description: "A Url Shortener that Shortens your long urls in a sec!",
    stacks: [{ name: "Node.js" }, { name: "EJS" }],
    image_items: [
      { image: "/assets/work/node/n1.png" },
      { image: "/assets/work/node/n2.png" },
    ],
    github: "https://github.com/shrinivaswaney22/",
    current_details: "",
  },
  {
    num: "05",
    category: "Full Stack",
    title: "Travel Iternary Booking Website",
    description:
      "A Travel Itnerary website that allows user to book,search accomodation,transport. This website has a special feature of providing itnerary of the travel by providing details of travel. Works only in India ",
    stacks: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Axios" },
      { name: "JWT" },
    ],
    image_items: [
      { image: "/assets/work/fullstack/f5.png" },
      { image: "/assets/work/fullstack/f1.png" },
      { image: "/assets/work/fullstack/f2.png" },
      { image: "/assets/work/fullstack/f4.png" },
      { image: "/assets/work/fullstack/f3.png" },
    ],
    github: "https://github.com/shrinivaswaney22/",
    current_details: "",
  },
];

const Projects = () => {
  const [projects, setProject] = useState(project[0]);
  const handleProjectChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(project[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:px-0"
    >
      <div className="container mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="outer-swiper"
          onSlideChange={handleProjectChange}
        >
          {project.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  {/* Text Area */}
                  <div className="w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between">
                    <div className="flex flex-col gap-[30px]">
                      <div className="text-8xl leading-none font-extralight text-transparent text-outline">
                        {item.num}
                      </div>
                      <h2 className="text-[42px] font-bold capitalize leading-none text-white group-hover:text-accent transition-all duration-500">
                        {item.category} Project - {item.title}
                      </h2>
                      <p className="text-white/60">{item.description}</p>
                      <ul className="flex gap-4">
                        {item.stacks.map((stack, idx) => {
                          return (
                            <li key={idx} className="text-accent text-xl">
                              {stack.name}
                              {idx !== item.stacks.length - 1 && ","}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="border border-white/20"></div>
                      <div className="flex gap-4 items-center">
                        <Link href={item.github}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-slate-900 flex justify-center items-center group">
                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live Project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        <Link href={item.github}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-slate-900 flex justify-center items-center group">
                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View on GitHub</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Image Area */}
                  <div className="w-full xl:w-[50%]">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="inner-swiper"
                    >
                      <ProjectSliderBtns
                        containerStyles="flex gap-2 absolute top-0 right-0 bottom-[cal(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="text-accent hover:text-accent-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                      />
                      {item.image_items.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                            <div className="w-full h-full relative">
                              <Image
                                src={img.image}
                                fill
                                className="object-cover"
                                alt="Project Image"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <ProjectSliderBtns
            containerStyles="flex gap-2 absolute right-0 bottom-[cal(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="text-accent hover:text-accent-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;
