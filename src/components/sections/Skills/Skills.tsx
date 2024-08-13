import React, { FC } from "react";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";
import Progress from "@/components/ui/Progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <Wrapper className="mb-10">
      <TextSpan className="text-2xl font-semibold mb-4">
        Technical Skills
      </TextSpan>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <span className="block text-lg font-semibold">{skill.name}</span>
            <Progress value={skill.level} max={100} variant="pattern" />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
