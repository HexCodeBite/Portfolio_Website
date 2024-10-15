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
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList>
                        <TabsTrigger>
                           Experience
                        </TabsTrigger>
                        <TabsTrigger>
                            Education
                        </TabsTrigger>
                        <TabsTrigger>
                            Skills
                        </TabsTrigger>
                        <TabsTrigger>
                            About me
                        </TabsTrigger>
                    </TabsList>
                    {/*content*/}
                    <div>content</div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;