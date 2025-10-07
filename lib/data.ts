import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import whs from "@/public/whs.png";
import purch from "@/public/purch.png";
import payroll from "@/public/payroll.png";
import iot from "@/public/iot.png";
import key from "@/public/key.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Computer Engineering",
    location: "Pampanga, Philippines",
    description:
      "Completed Bachelor's degree in Computer Engineering with focus on software development, embedded systems, and hardware electronics.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Associate Systems Developer",
    location: "Sumidenso Automotive Technology Asia Corp.",
    description:
      "Developed and implemented software systems based on client specifications. Conducted comprehensive system testing and delivered detailed documentation to stakeholders.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2019",
  },
  {
    title: "MIS Staff / Junior Programmer",
    location: "O&G Leather Manufacturing Corporation",
    description:
      "Designed and developed HR Timekeeping and Finance Payroll System. Built Purchase and Inventory System for sister company. Enhanced HR and Manufacturing systems for operational efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Systems Engineer",
    location: "Molex Integrated Products Philippines, Inc",
    description:
      "Currently developing and integrating discrete systems using engineering, networking, enterprise application integration, and automation techniques. Delivering customer value through improved product performance and quality.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HR Timekeeping & Payroll System",
    description:
      "Designed and developed comprehensive HR Timekeeping and Finance Payroll System for O&G Leather Manufacturing Corporation. Streamlined employee time tracking and payroll processing.",
    tags: ["C#", "VB.NET", "MSSQL", "Windows Forms", "ASP.NET"],
    imageUrl: payroll,
  },
  {
    title: "Purchase & Inventory Management",
    description:
      "Built Purchase and Inventory System for sister company. Enhanced operational efficiency with real-time tracking and automated inventory management features.",
    tags: ["C#", "WPF", "RESTful APIs", "System Integration"],
    imageUrl: purch,
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Developed various IoT solutions and embedded systems projects during freelance work. Created microcontroller-based automation systems with web interfaces.",
    tags: ["Arduino", "C/C++", "PHP", "JavaScript", "Hardware Integration"],
    imageUrl: iot,
  },

  {
    title: "Warehouse Management System",
    description:
      "This Warehouse Management System (WMS) is designed to streamline inventory tracking, order processing, and stock control. It improves efficiency, reduces errors, and provides real-time data to support better warehouse operations.",
      tags: ["C#", "ASP.Net","JQuery", "RESTful APIs", "System Integration"],
    imageUrl: whs,
  },
  {
    title: "Key Process Qualification System",
    description:
      "This Key Process Qualification (KPQ) System is developed to standardize, track, and manage critical process qualifications. It ensures compliance, enhances traceability, and supports consistent process validation across operations.",
      tags: ["C#", "VB.NET", "MSSQL", "Windows Forms",  "RESTful APIs", "System Integration"],
    imageUrl: key,
  },
] as const;

export const skillsData = [
  "C#",
  "VB.NET",
  "C/C++",
  "PHP",
  "JavaScript",
  "jQuery",
  "Arduino",
  "PostgreSQL",
  "MSSQL",
  "MySQL",
  "Git",
  "GitLab",
  "SVN",
  "ASP.NET",
  "WPF",
  "Windows Forms",
  "Excel VBA",
  "RESTful APIs",
  "Object-Oriented Programming",
  "MVC",
  "MVVM",
  "Hardware Troubleshooting",
  "Network Configuration",
  "Embedded Systems",
  "IoT Development",
  "System Integration",
  "Software Quality Assurance",
] as const;
