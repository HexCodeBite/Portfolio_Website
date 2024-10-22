"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"

import {motion} from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+373) 68184788",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "ursatiivladimir@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Moldova, Chisinau 2032",
    },
]
const Contact = () => {
    return (
        <motion.section initial></motion.section>
    )
}

export default Contact;