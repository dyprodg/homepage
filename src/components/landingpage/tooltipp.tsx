"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

import { 
    FaAws, 
    FaDatabase, 
    FaPython, 
    FaReact, 
    FaJs, 
    FaCss3Alt, 
    FaDocker,   
} from "react-icons/fa"; 

import { 
    SiAwslambda, 
    SiAmazonapigateway, 
    SiAmazondynamodb, 
    SiAmazoncognito, 
    SiAmazonec2, 
    SiAmazonecs, 
    SiAwsamplify, 
    SiTerraform, 
    SiVite,
    SiKubernetes,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const stack = [
  {
    id: 1,
    name: "Next.js",
    designation: "Fullstack React Framework",
    icon: <FaReact size={32} />, 
  },
  {
    id: 2,
    name: "AWS",
    designation: "Cloud Provider",
    icon: <FaAws size={32} />, 
  },
  {
    id: 3,
    name: "AWS Lambda",
    designation: "Serverless Computing",
    icon: <SiAwslambda size={32} />, 
  },
  {
    id: 4,
    name: "DynamoDB",
    designation: "NoSQL Database",
    icon: <SiAmazondynamodb size={32} />, 
  },
  {
    id: 6,
    name: "PostgreSQL",
    designation: "Relational Database",
    icon: <FaDatabase size={32} />, 
  },
  {
    id: 7,
    name: "React",
    designation: "JavaScript Library",
    icon: <FaReact size={32} />, 
  },
  {
    id: 8,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    icon: <RiTailwindCssFill size={32} />, 
  },
  {
    id: 9,
    name: "CSS",
    designation: "Styling Language",
    icon: <FaCss3Alt size={32} />, 
  },
  {
    id: 10,
    name: "JavaScript",
    designation: "Programming Language",
    icon: <FaJs size={32} />, 
  },
  {
    id: 11,
    name: "Python",
    designation: "Programming Language",
    icon: <FaPython size={32} />, 
  },
  {
    id: 12,
    name: "Terraform",
    designation: "Infrastructure as Code",
    icon: <SiTerraform size={32} />, 
  },
  {
    id: 13,
    name: "Vite",
    designation: "Build Tool",
    icon: <SiVite size={32} />, 
  },
  {
    id: 14,
    name: "Amplify",
    designation: "Backend as a Service",
    icon: <SiAwsamplify size={32} />, 
  },
  {
    id: 15,
    name: "EC2",
    designation: "Virtual Servers",
    icon: <SiAmazonec2 size={32} />, 
  },
  {
    id: 16,
    name: "ECS",
    designation: "Container Orchestration",
    icon: <SiAmazonecs size={32} />, 
  },
  {
    id: 17,
    name: "Cognito",
    designation: "User Management",
    icon: <SiAmazoncognito size={32} />,
  },
  {
    id: 18,
    name: "API Gateway",
    designation: "API Management",
    icon: <SiAmazonapigateway size={32} />,
  },
  {
    id: 19,
    name: "Docker",
    designation: "Containerization Platform",
    icon: <FaDocker size={32} />, 
  },
  {
    id: 20,
    name: "Kubernetes",
    designation: "Container Orchestration",
    icon: <SiKubernetes size={32} />, 
  },
];


export function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={stack} />
      </div>
  );
}
