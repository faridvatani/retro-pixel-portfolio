// src/components/sections/projects/ProjectsSection.tsx
import React, { FC } from "react";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";
import Table from "@/components/ui/Table";

interface Project {
  name: string;
  description: string;
  status: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Wrapper className="mb-10">
      <TextSpan className="text-2xl font-semibold mb-4">
        Recent Projects:
      </TextSpan>
      <div className="nes-table-responsive grid grid-cols-1 gap-4 mt-5">
        <Table header={["Name", "Description", "Status"]} data={projects} />
      </div>
    </Wrapper>
  );
};

export default Projects;
