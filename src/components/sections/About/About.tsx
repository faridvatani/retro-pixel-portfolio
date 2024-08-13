import React, { FC } from "react";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";

const About: FC = () => {
  return (
    <Wrapper className="mb-10">
      <TextSpan className="text-2xl font-semibold mb-4">About Me</TextSpan>
      <p className="text-lg mt-5">
        I am a passionate developer with experience in various technologies. I
        have been working in the software development industry for over 5 years
        and have a strong background in web development. I am proficient in
        JavaScript, React, Node.js, and other modern technologies. I am always
        eager to learn new things and take on challenging projects. I am a team
        player and enjoy collaborating with others to create innovative
        solutions.
      </p>
    </Wrapper>
  );
};

export default About;
