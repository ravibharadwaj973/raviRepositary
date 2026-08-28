export const workCases = [
  {
    number: "01",
    title: "raviCRM",
    category: "CRM & Lead Management System",
    image: "/crm.png",
    liveUrl: "https://crm.jharavi.in",
    summary:
      "A full-stack CRM system designed to capture, organize, and automate lead workflows across business teams.",
    focus:
      "The strongest case study in the portfolio, combining product thinking, backend architecture, lead operations, and third-party marketing integrations.",
    highlights: [
      "Full-stack development",
      "Spring Boot backend",
      "Next.js frontend",
      "PostgreSQL",
      "Lead management",
      "APIs and webhooks",
      "Meta integration",
    ],
  },
  {
    number: "02",
    title: "Cloud Infrastructure",
    category: "Infrastructure & Deployment Automation",
    image: "/cloudSecruity.png",
    liveUrl: "https://cloud.jharavi.in",
    summary:
      "A cloud infrastructure and deployment automation project focused on scalable, repeatable application delivery.",
    focus:
      "Shows the ability to work beyond application code, covering infrastructure, deployment pipelines, and production-ready cloud architecture.",
    highlights: [
      "AWS",
      "EC2",
      "Auto Scaling",
      "Load Balancer",
      "Docker",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    number: "03",
    title: "Hospital Management System",
    category: "Secure Healthcare Management Platform",
    image: "/hmslarge.jpg",
    liveUrl: "https://hospital.jharavi.in",
    summary:
      "A secure healthcare platform for managing patients, doctors, appointments, records, and operational access.",
    focus:
      "Demonstrates full-stack development with security-first architecture, role-based access, encrypted data handling, and AWS-managed services.",
    highlights: [
      "Spring Boot backend",
      "Next.js frontend",
      "Secure authentication",
      "Role-Based Access Control",
      "Patient and medical records",
      "Appointment and doctor management",
      "PostgreSQL database",
      "AWS KMS",
      "Amazon Cognito",
      "AWS Secrets Manager",
      "AWS WAF",
      "Application Load Balancer",
      "Amazon RDS",
      "CloudWatch monitoring",
      "AWS Backup and recovery",
      "Audit logging",
    ],
  },
  {
    number: "04",
    title: "Team Chat Application",
    category: "Real-Time Collaboration Platform",
    image: "/teamchat.png",
    liveUrl: "https://team.jharavi.in",
    summary:
      "A real-time communication platform designed for teams to create channels, exchange messages, manage conversations, and collaborate securely within a shared workspace.",
    focus:
      "Shows collaboration product thinking with team workspaces, conversation structure, access control, and real-time messaging behavior.",
    highlights: [
      "User authentication",
      "Workspace and team management",
      "Public and private channels",
      "One-to-one direct messages",
      "Real-time messaging",
      "Message history",
    ],
  },
] as const;
