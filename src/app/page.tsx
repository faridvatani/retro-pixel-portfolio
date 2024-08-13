"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";
import Table from "@/components/ui/Table";
import Icon from "@/components/ui/Icon";
import Avatar from "@/components/ui/Avatar";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Balloon from "@/components/ui/Balloon";
import Link from "next/link";
import Progress from "@/components/ui/Progress";
import Badge from "@/components/ui/Badge";
import List from "@/components/ui/List";

interface Certification {
  name: string;
  status: string;
  statusVariant: "dark" | "primary" | "success" | "warning" | "error";
}

const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const skillList = [
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

  const projectData = [
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
  const certifications: Certification[] = [
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

  return (
    <>
      <header className="bg-dark-pixel animate-moveBg h-64 flex flex-col items-center justify-center gap-6 text-white">
        <h1 className="text-4xl font-bold animate-fadeIn">My Portfolio</h1>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={() => setIsDialogOpen(true)}>
            Contact Me
          </Button>
          <Button>Download CV</Button>
        </div>
      </header>
      <main className="px-8 pt-8">
        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">About Me</TextSpan>
          <p className="text-lg mt-5">
            I am a passionate developer with experience in various technologies.
            I have been working in the software development industry for over 5
            years and have a strong background in web development. I am
            proficient in JavaScript, React, Node.js, and other modern
            technologies. I am always eager to learn new things and take on
            challenging projects. I am a team player and enjoy collaborating
            with others to create innovative solutions.
          </p>
        </Wrapper>

        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">
            Technical Skills
          </TextSpan>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            {skillList.map((skill) => (
              <div key={skill.name} className="mb-4">
                <span className="block text-lg font-semibold">
                  {skill.name}
                </span>
                <Progress value={skill.level} max={100} variant="pattern" />
              </div>
            ))}
          </div>
        </Wrapper>

        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">
            Recent Projects:
          </TextSpan>
          <div className="nes-table-responsive  grid grid-cols-1  gap-4 mt-5">
            <Table
              header={["Name", "Description", "Status"]}
              data={projectData}
            />
          </div>
        </Wrapper>

        <Wrapper className="mb-10 w-full">
          <TextSpan className="text-2xl font-semibold mb-4">
            Certifications
          </TextSpan>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-5">
            <List
              items={certifications}
              renderItem={(cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col md:flex-row gap-4 w-full justify-start items-center"
                >
                  <span className="block text-lg font-semibold w-full md:w-auto">
                    {cert.name}
                  </span>
                  <Badge variant={cert.statusVariant} className="text-sm">
                    {cert.status}
                  </Badge>
                </div>
              )}
            />
          </div>
        </Wrapper>

        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">
            Testimonials
          </TextSpan>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <Balloon className="p-4 bg-gray-100">
              <div className="flex items-center gap-4">
                <Avatar
                  src="/assets/images/avatar.png"
                  alt="testimonial 1"
                  size="large"
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-around items-start">
                  <p className="text-lg font-semibold mb-0">John Doe</p>
                  <p className="text-sm mb-0">CEO of Company A</p>
                </div>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Balloon>
            <Balloon className="p-4 bg-gray-100" from="right">
              <div className="flex items-center gap-4">
                <Avatar
                  src="/assets/images/avatar.png"
                  alt="testimonial 2"
                  size="large"
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-around items-start">
                  <p className="text-lg font-semibold mb-0">John karlson</p>
                  <p className="text-sm mb-0">CEO of Company B</p>
                </div>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Balloon>
          </div>
        </Wrapper>

        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">
            Contact Information
          </TextSpan>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            <div>
              <h3 className="text-lg font-semibold text-primary mt-4">
                Email:
              </h3>
              <a
                href="mailto:example@gmail.com"
                className="block text-blue-600 hover:underline"
              >
                example@gmail.com
              </a>
              <h3 className="text-lg font-semibold text-primary mt-4">
                Phone:
              </h3>
              <p className="text-gray-700">+1234567890</p>
              <h3 className="text-lg font-semibold text-primary mt-4">
                Address:
              </h3>
              <p className="text-gray-700">123 Main Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mt-4">
                Social Media:
              </h3>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="facebook" size="medium" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="twitter" size="medium" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="linkedin" size="medium" />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="github" size="medium" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="instagram" size="medium" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="youtube" size="medium" />
                </Link>
              </div>
              <h3 className="text-lg font-semibold text-primary mt-4">
                Website:
              </h3>
              <Link
                href="https://www.example.com"
                className="block text-blue-600 hover:underline"
              >
                www.example.com
              </Link>
            </div>
          </div>
        </Wrapper>

        <div className="relative bottom-0 mt-8 flex justify-center items-center">
          <Icon type="nes-mario" animate size="small" className="bottom-0" />
          <Icon type="nes-octocat" animate size="small" className="bottom-0" />
        </div>
      </main>
      <footer className="relative bg-gray-800 text-white p-4 text-center">
        <p className="m-0">&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        closeOnOverlayClick
        rounded
        className="max-w-lg"
      >
        <div className="flex justify-between items-center">
          <TextSpan className="text-2xl font-semibold">Contact Me</TextSpan>
          <Button onClick={() => setIsDialogOpen(false)}>
            <Icon type="close" size="small"></Icon>
          </Button>
        </div>
        <p className="mt-4 text-pretty text-sm">
          If you have any questions or would like to get in touch, please feel
          free to send me a message using the form below.
        </p>
        <form className="mt-4">
          <Input
            id="name"
            label="Name"
            placeholder="Your Name"
            className="mb-4"
          />
          <Input
            id="email"
            label="Email"
            placeholder="Your Email"
            className="mb-4"
          />
          <Textarea
            id="message"
            label="Message"
            placeholder="Your Message"
            className="mb-4"
          />
          <Button variant="primary" type="submit" className="mt-5">
            Send Message
          </Button>
        </form>
      </Dialog>
    </>
  );
};

export default Portfolio;
