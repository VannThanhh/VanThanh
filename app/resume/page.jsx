"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "I am a passionate Front-End Developer eager to learn and grow in the tech industry. I enjoy building intuitive and user-friendly web applications.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Trương Văn Thanh",
    },
    {
      fieldName: "Experience",
      fieldValue: "0 Year",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 0869965023",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "truongvanthanh2609@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Here are some personal and academic projects I have worked on, showcasing my programming skills.",
  items: [
    {
      project: "Foodie - Online Food Ordering System",
      role: "Full Stack Developer",
      duration: "Jan 2024 - Present",
      description:
        "Built an online food ordering platform using Next.js, MongoDB, and Tailwind CSS.",
    },
    {
      project: "Grill-Master - BBQ Store Website",
      role: "Front-End Developer",
      duration: "Oct 2023 - Dec 2023",
      description:
        "Developed the UI for a BBQ store using React.js and Tailwind CSS.",
    },
    {
      project: "Personal Portfolio Website",
      role: "Front-End Developer",
      duration: "Aug 2023 - Sep 2023",
      description:
        "Designed and built a personal website to showcase my projects and skills.",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I have been studying at the College of Information Technology, Ho Chi Minh City, majoring in Information Technology. During my studies, I have enhanced my knowledge in programming, computer systems, and software development.",
  items: [
    {
      institution: "College of Information Technology, Ho Chi Minh City",
      degree: "Information Technology",
      duration: "10/2022 - 10/2024",
    },
    // {
    //   institution: "Codecademy",
    //   degree: "Font-End Track",
    //   duration: "2023",
    // },
    // {
    //   institution: "Online Course",
    //   degree: "Font-End Track",
    //   duration: "2023",
    // },
    // {
    //   institution: "Online Course",
    //   degree: "Font-End Track",
    //   duration: "2023",
    // },
    // {
    //   institution: "Online Course",
    //   degree: "Font-End Track",
    //   duration: "2023",
    // },
    // {
    //   institution: "Online Course",
    //   degree: "Font-End Track",
    //   duration: "2023",
    // },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel iure repellendus natus ab dolorum itaque necessitatibus?",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html",
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
      name: "ReactJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "ModeJs",
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="textxl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.project}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title} </h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="textxl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name} </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

          <div></div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
