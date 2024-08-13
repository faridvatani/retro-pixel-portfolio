"use client";
import { useState } from "react";
import {
  About,
  Certifications,
  Contact,
  ContactDialog,
  Footer,
  Header,
  IconsShowcase,
  Projects,
  Skills,
  Testimonials,
} from "@/components/sections";
import {
  certifications,
  projectData,
  skillList,
  testimonials,
} from "@/data/data";

const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Header setIsDialogOpen={setIsDialogOpen} />
      <main className="px-8 pt-8">
        <About />
        <Skills skills={skillList} />
        <Projects projects={projectData} />
        <Certifications certifications={certifications} />
        <Testimonials testimonials={testimonials} />
        <Contact />
        <IconsShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
