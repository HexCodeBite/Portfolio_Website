"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

// about data
const about = {
    title: "About me",
    description:"sdfgdfg dfogspdofgj dsfogdg fdog f godfpgsdofg fggg fd fgodfgpodfg godfgj gfggggggd.",
    info: [
        {
            fieldName:"Name",
            fieldValue:"Vladimir Ursatii"
        },
        {
            fieldName:"Phone",
            fieldValue:"(+373) 68184788"
        },
        {
            fieldName:"Experience",
            fieldValue:"1+ Year"
        },
        {
            fieldName:"Email",
            fieldValue:"ursatiivldimir@gmail.com"
        },
        {
            fieldName:"Freelance",
            fieldValue:"Available"
        },
        {
            fieldName:"Languages",
            fieldValue:"Russian, English, Romanian"
        },
    ]
}
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Sdfgdfg dfogspdofgj dsfogdg fdog f godfpgsdofg fggg fd fgodfgpodfg godfgj gfggggggd.",
    items: [
        {
            company: "company1",
            position: "Front-End Developer Intern",
            duration: " 2022 - Present"
        },
        {
            company: "company1",
            position: "Front-end Developer",
            duration: " 2022 - Present"
        },
        {
            company: "company1",
            position: "Freelance Web Developer",
            duration: " 2022 - Present"
        },

    ]
}
const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My education',
    description: "Sdfgdfg dfogspdofgj dsfogdg fdog f godfpgsdofg fggg fd fgodfgpodfg godfgj gfggggggd.",
    items: [
        {
            institution: "Technical University of Moldova",
            degree: "Engineering",
            duration: " 2022 - Present"
        },
        {
            institution: "Technical University of Moldova",
            degree: "Engineering",
            duration: " 2022 - Present"
        },
        {
            institution: "Online Platform UDEMY",
            degree: "Engineering",
            duration: " 2022 - Present"
        },


    ]
}
const skills = {
    title: 'My skills',
    description: "Sdfgdfg dfogspdofgj dsfogdg fdog f godfpgsdofg fggg fd fgodfgpodfg godfgj gfggggggd.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaFigma />,
            name: "figma"
        },
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] items-center xl:items-start">
                    <TabsList className="flex flex-col w-full xl:mx-0 max-w-[380px] gap-6 justify-center">
                        <TabsTrigger value="experience">
                            Experience
                        </TabsTrigger>
                        <TabsTrigger value="education">
                            Education
                        </TabsTrigger>
                        <TabsTrigger value="skills">
                            Skills
                        </TabsTrigger>
                        <TabsTrigger value="about">
                            About me
                        </TabsTrigger>
                    </TabsList>
                    {/*content*/}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col xl:text-left gap-[30px] text-center">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-4 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1 box-content">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col xl:text-left gap-[30px] text-center">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-4 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1 box-content">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">

                        </TabsContent>
                        <TabsContent value="about" className="w-full">

                        </TabsContent>

                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;