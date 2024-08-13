import { Certification, Projects, Skills, Testimonial } from "@/types/types";

export const skillList: Skills[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "PostgreSQL", level: 65 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Bootstrap", level: 80 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 20 },
];

export const projectData: Projects[] = [
  {
    name: "Project A",
    description: "Description of Project A",
    status: "Completed",
  },
  {
    name: "Project B",
    description: "Description of Project B",
    status: "In Progress",
  },
  {
    name: "Project C",
    description: "Description of Project C",
    status: "Planned",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    status: "Completed",
    statusVariant: "success",
  },
  {
    name: "Google Cloud Professional Data Engineer",
    status: "In Progress",
    statusVariant: "warning",
  },
  {
    name: "Microsoft Certified: Azure Administrator",
    status: "Planned",
    statusVariant: "primary",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Tech Corp",
    message: "This is a testimonial message from John Doe.",
    avatar: "/assets/images/avatar.png",
    position: "left",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Innovate Ltd",
    message: "This is a testimonial message from Jane Smith.",
    avatar: "/assets/images/avatar.png",
    position: "right",
  },
];
