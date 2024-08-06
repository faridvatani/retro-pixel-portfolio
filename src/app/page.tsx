"use client";
import Button from "@/components/Button";
import TextSpan from "@/components/TextSpan";
import { Wrapper } from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24 px-52">
      <Wrapper title="My Portfolio" className="w-full bg-white">
        <TextSpan>
          Hi, I&apos;m a software developer. I&apos;m passionate about building
          web applications and solving problems. I&apos;m currently learning
          about TypeScript, React, and Node.js.
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
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="mt-10">
          <TextSpan>
            Here are some of the technologies I&apos;m currently learning:
          </TextSpan>
          <ul>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Prisma</li>
            <li>Serverless</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="mt-10 w-fit flex gap-4 justify-center">
          <Button variant="primary">Contact me</Button>
          <Button>View projects</Button>
          <Button>Resume</Button>
        </div>
      </Wrapper>
    </main>
  );
}
