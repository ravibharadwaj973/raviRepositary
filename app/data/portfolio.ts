import fullStackImage from "../../public/Full Stack Development Workspace.png";
import crmImage from "../../public/CRM for SaaS Infographic Wheel.png";
import apiImage from "../../public/API Integration Dashboard Illustration.png";
import databaseImage from "../../public/Neon Cyber Database Network (1).png";
import cloudImage from "../../public/Neon Cloud Network Visualization.png";
import automationImage from "../../public/Solving Integrated Automation Architecture.png";

export const skills = [
  {
    number: "01",
    title: "Full-Stack Development",
    details: ["Next.js", "React", "TypeScript", "Spring Boot"],
    image: fullStackImage,
    imageAlt: "Full-stack development workspace with frontend and backend code",
  },
  {
    number: "02",
    title: "CRM & Business Systems",
    details: ["Lead Management", "Dashboards", "Workflows"],
    image: crmImage,
    imageAlt: "CRM infographic showing marketing, sales, reporting, and customer workflows",
  },
  {
    number: "03",
    title: "Backend & API Development",
    details: ["Java", "REST APIs", "Authentication", "Webhooks"],
    image: apiImage,
    imageAlt: "API integration illustration connecting applications, data, and services",
  },
  {
    number: "04",
    title: "Database & Data Management",
    details: ["PostgreSQL", "MySQL", "JPA/Hibernate"],
    image: databaseImage,
    imageAlt: "Database network connecting a central database to data tables",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    details: ["AWS", "Docker", "Terraform", "CI/CD"],
    image: cloudImage,
    imageAlt: "Cloud network connecting applications, servers, and digital services",
  },
  {
    number: "06",
    title: "Automation & Integrations",
    details: ["APIs", "Webhooks", "External Systems"],
    image: automationImage,
    imageAlt: "Integrated automation architecture connecting cloud platforms and external systems",
  },
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Identify what is currently inefficient, manual, or difficult to manage.",
  },
  {
    number: "02",
    title: "Map the Workflow",
    description:
      "Understand how users, data, and processes currently move through the business.",
  },
  {
    number: "03",
    title: "Design the System",
    description:
      "Define the application structure, backend logic, database, and integrations.",
  },
  {
    number: "04",
    title: "Build the Application",
    description:
      "Develop the frontend, backend services, APIs, and core functionality.",
  },
  {
    number: "05",
    title: "Connect Data & Integrations",
    description:
      "Connect external systems, webhooks, APIs, and business data.",
  },
  {
    number: "06",
    title: "Deploy & Automate",
    description:
      "Deploy the system and automate infrastructure, workflows, and delivery processes.",
  },
] as const;
