"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import TextSpan from "@/components/TextSpan";
import { Wrapper } from "@/components/Wrapper";
import List from "@/components/List";
import Table from "@/components/Table";
import Progress from "@/components/Progress";
import Balloon from "@/components/Balloon";
import Badge from "@/components/Badge";

export default function Home() {
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

  return (
    <>
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        closeOnOverlayClick
        rounded
      >
        <p>Are you sure you want to proceed?</p>
        <Button onClick={handleCloseDialog}>Close</Button>
      </Dialog>
      <main className="flex min-h-screen flex-col items-center justify-start py-24 px-52">
        <Wrapper title="My Portfolio" className="w-full bg-white">
          <TextSpan>
            Hi, I&apos;m a software developer. I&apos;m passionate about
            building web applications and solving problems. I&apos;m currently
            learning about TypeScript, React, and Node.js.
          </TextSpan>
          <TextSpan>
            I&apos;m also interested in learning more about cloud computing and
            serverless technologies.
          </TextSpan>
          <TextSpan>
            I&apos;m currently looking for opportunities to work as a software
            developer.
          </TextSpan>
          <div className="mt-10">
            <TextSpan>
              Here are some of the technologies I&apos;ve been working with
              recently:
            </TextSpan>
            <List items={skillList} type="circle" />
          </div>
          <div className="mt-10 w-fit flex gap-4 justify-center">
            <Button onClick={handleOpenDialog}>Resume</Button>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
