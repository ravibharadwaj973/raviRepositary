export const skills = [
  {
    number: "01",
    title: "Full-Stack Development",
    details: ["Next.js", "React", "TypeScript", "Spring Boot"],
    visual: "app",
  },
  {
    number: "02",
    title: "CRM & Business Systems",
    details: ["Lead Management", "Dashboards", "Workflows"],
    visual: "crm",
  },
  {
    number: "03",
    title: "Backend & API Development",
    details: ["Java", "REST APIs", "Authentication", "Webhooks"],
    visual: "api",
  },
  {
    number: "04",
    title: "Database & Data Management",
    details: ["PostgreSQL", "MySQL", "JPA/Hibernate"],
    visual: "data",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    details: ["AWS", "Docker", "Terraform", "CI/CD"],
    visual: "cloud",
  },
  {
    number: "06",
    title: "Automation & Integrations",
    details: ["APIs", "Webhooks", "External Systems"],
    visual: "auto",
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
