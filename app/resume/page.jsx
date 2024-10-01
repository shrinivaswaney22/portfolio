"use client";

import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaLinux,
  FaFigma,
} from "react-icons/fa";
import { SiRedux, SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

//DATA
const about = {
  title: "About Me",
  description:
    "I am a dedicated and detail-oriented full stack developer and data analyst with a strong background in web development and machine learning. Currently pursuing a degree in Computer Engineering at SPIT Mumbai, I have experience in building dynamic web applications using the MERN stack and am proficient in JavaScript, React, and Node.js. My analytical skills enable me to transform complex data into actionable insights, enhancing decision-making processes. I thrive in collaborative environments, continuously seeking opportunities to learn and grow in technology and software development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shrinivas Waney",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-9518988549",
    },
    {
      fieldName: "Experience",
      fieldValue: "+1",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Location",
      fieldValue: "Mumbai,Maharashtra,India",
    },
    {
      fieldName: "Pincode",
      fieldValue: "401105",
    },
    {
      fieldName: "Email",
      fieldValue: "156rajw@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Hindi,Marathi",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have actively engaged in extracurricular activities, taking on leadership roles such as Campus Ambassador, Creatives Head, and Subcommittee Member in various college committees. These experiences have honed my creative, leadership, and team collaboration skills, enabling me to effectively contribute to event management and promotional initiatives.",
  items: [
    {
      icon: "/assets/resume/education/elsewear_india_logo.jpeg",
      company: "Elsewear India",
      position: "Campus Ambassador",
      duration: "July'24-September'24",
    },
    {
      icon: "/assets/resume/education/sportscom.jpeg",
      company: "Sports Committee-SPIT",
      position: "Creatives Head",
      duration: "August'23-July'24",
    },
    {
      icon: "/assets/resume/education/shreshta.jpeg",
      company: "Shreshtha Committee-SPIT",
      position: "Creatives Head ",
      duration: "December'22-September'23",
    },
    {
      icon: "/assets/resume/education/face.jpeg",
      company: "F.A.C.E. -SPIT",
      position: "Subcommittee Member",
      duration: "December'22-September'23",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Building a strong foundation for a brighter tomorrow.",
  items: [
    {
      icon: "/assets/resume/education/spit_logo.jpeg",
      institution: "Sardar Patel Institute of Technology (SPIT),Mumbai",
      degree: "Bachelor of Technology",
      duration: "December'22-August'26",
    },
    {
      icon: "/assets/resume/education/kendriya.jpeg",
      institution: "Kendriya Vidyalaya,Vayusena Nagar,Nagpur",
      degree: "H.S.C.",
      duration: "August'20-August'22",
    },
    {
      icon: "/assets/resume/education/school10.jpeg",
      institution: "Bhavan's B.P. Vidya Mandir,Civilines,Nagpur",
      degree: "S.S.C.",
      duration: "August'07-August'20",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Progressively advancing in my professional journey, I have consistently acquired new skills and experiences that contribute to my growth and expertise.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "Javascript (JS)",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaLinux />,
      name: "Linux OS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx=0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-900 h-[200px] py-6 px-10 rounded-3xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex flex-1 flex-col">
                            <div className="flex mb-4">
                              <Image
                                src={item.icon}
                                priority
                                quality={100}
                                height={35}
                                width={35}
                                className="rounded-full"
                                alt=""
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              {" "}
                              <span className="bg-accent w-4 h-4 rounded-full"></span>
                              <h3 className="font-bold text-white/60 whitespace-nowrap">
                                {item.company}
                              </h3>
                            </div>
                            <div className="flex  items-center gap-3">
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.position}
                              </h3>
                              <span className="text-accent">
                                {item.duration}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-900 h-[200px] py-6 px-10 pb-1 rounded-3xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="mb-4">
                            <Image
                              src={item.icon}
                              priority
                              quality={100}
                              height={35}
                              width={35}
                              className="rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-accent w-4 h-4 rounded-full"></span>
                            <h3 className="font-bold text-white/60 whitespace-nowrap">
                              {item.institution}
                            </h3>
                          </div>
                          <div className="gap-3">
                            <h3 className="text-xl min-h-[40px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <span className="text-accent">{item.duration}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 py-6 gap-4 md:grid-cols-4 xl:gap-[30px]">
                {skills.items.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full bg-slate-900 h-[150px] rounded-3xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start"
                      >
                        <span className="text-white/60">{info.fieldName}:</span>
                        <span className="text-lg">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
