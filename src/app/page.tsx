"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import TextSpan from "@/components/TextSpan";
import { Wrapper } from "@/components/Wrapper";
import List from "@/components/List";
import Table from "@/components/Table";
import Icon from "@/components/Icon";
import Avatar from "@/components/Avatar";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const skillList = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
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

  return (
    <>
      <header className="bg-dark-pixel animate-moveBg h-64 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="p-8">
        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">About Me</TextSpan>
          <p className="text-lg mt-5">
            I am a passionate developer with experience in various technologies.
          </p>
        </Wrapper>
        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">
            Technologies I&apos;ve been working with recently:
          </TextSpan>
          <div className="grid grid-cols-2 gap-4 mt-5 px-5">
            <List items={skillList} type="circle" />
          </div>
        </Wrapper>
        <Wrapper className="mb-10">
          <TextSpan className="text-2xl font-semibold mb-4">
            Recent Projects:
          </TextSpan>
          <div className="nes-table-responsive mt-5">
            <Table
              header={["Name", "Description", "Status"]}
              data={projectData}
              className=""
            />
          </div>
        </Wrapper>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={handleOpenDialog}>
            Contact Me
          </Button>
          <Button>Download CV</Button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        closeOnOverlayClick
        rounded
        className="max-w-lg"
      >
        <div className="flex justify-between items-center">
          <TextSpan className="text-2xl font-semibold">Contact Me</TextSpan>
          <Button onClick={handleCloseDialog}>
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
