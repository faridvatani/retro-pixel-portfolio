import React, { FC } from "react";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";
import Balloon from "@/components/ui/Balloon";
import Avatar from "@/components/ui/Avatar";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  position: "left" | "right";
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Wrapper className="mb-10 w-full">
      <TextSpan className="text-2xl font-semibold mb-4">Testimonials</TextSpan>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {testimonials.map((testimonial) => (
          <Balloon
            key={testimonial.name}
            className="p-4 bg-gray-100"
            from={testimonial.position}
          >
            <div className="flex items-center gap-4">
              <Avatar
                src={testimonial.avatar}
                alt={`testimonial ${testimonial.name}`}
                size="large"
                className="rounded-lg"
              />
              <div className="flex flex-col justify-around items-start">
                <p className="text-lg font-semibold mb-0">{testimonial.name}</p>
                <p className="text-sm mb-0">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
            <p className="mt-4">{testimonial.message}</p>
          </Balloon>
        ))}
      </div>
    </Wrapper>
  );
};

export default Testimonials;
