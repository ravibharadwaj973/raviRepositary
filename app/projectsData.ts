export const projects = [
  {
    id: "virtual-library",
    title: "Virtual Library",
    image: "/virtuallibray.png",
    liveUrl: "https://library.jharavi.in",
    summary: "A digital reading and catalog platform for organizing books, users, and access.",
  },
  {
    id: "team-chat",
    title: "Team Chat",
    image: "/teamchat.png",
    liveUrl: "https://team.jharavi.in",
    summary: "A company chat app for teams, departments, and organization-wide collaboration.",
  },
  {
    id: "multi-tenant-crm",
    title: "Multi-Tenant CRM",
    image: "/crm.png",
    liveUrl: "https://crm.jharavi.in",
    summary: "A CRM app built for multiple tenants with leads, dashboards, and workflows.",
  },
  {
    id: "hospital-management",
    title: "Hospital Management",
    image: "/hmslarge.jpg",
    liveUrl: "https://hospital.jharavi.in",
    summary: "A healthcare management system for patients, appointments, and operations.",
  },
  {
    id: "gym-mangement",
    title: "Gym Management",
    image: "/gym.jpg",
    liveUrl: "https://gym.jharavi.in",
    summary: "A healthcare management system for patients, appointments, and operations.",
  },
] as const;

export const featuredProjects = projects.slice(0, 4);
