"use client";
import Button from "@/components/ui/Button";
import { Dispatch, FC } from "react";

interface HeaderProps {
  setIsDialogOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setIsDialogOpen }) => {
  return (
    <header className="bg-dark-pixel animate-moveBg h-64 flex flex-col items-center justify-center gap-6 text-white">
      <h1 className="text-4xl font-bold animate-fadeIn">My Portfolio</h1>
      <div className="flex justify-center gap-4">
        <Button variant="primary" onClick={() => setIsDialogOpen(true)}>
          Contact Me
        </Button>
        <Button>Download CV</Button>
      </div>
    </header>
  );
};

export default Header;
