"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center lading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Computer Engineering</span> and have developed expertise in both software and hardware domains. 
        As a versatile IT professional, I specialize in{" "}
        <span className="font-medium">system integration, software development, and embedded technologies</span>.{" "}
        <span className="italic">My passion lies in</span> developing integrated systems that bridge software and hardware, 
        creating <span className="underline">practical and reliable solutions</span> for complex technical challenges. My core skills include{" "}
        <span className="font-medium">
          C#, VB.NET, C/C++, PHP, JavaScript, and Arduino programming
        </span>
        . I also have experience with databases like PostgreSQL, MSSQL, and MySQL, along with version control systems and hardware troubleshooting.
      </p>

      <p>
        <span className="italic">Throughout my career</span>, I have worked on diverse projects from enterprise applications 
        to embedded systems and IoT solutions. I enjoy{" "}
        <span className="font-medium">continuous learning</span> and staying updated with emerging technologies. 
        Currently, I&apos;m focused on advancing my expertise in{" "}
        <span className="font-medium">systems engineering and automation</span> while delivering innovative solutions 
        that enhance operational efficiency and product quality.
      </p>
    </motion.section>
  );
}
