import React, { FC } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  className?: string;
}

const Textarea: FC<TextareaProps> = ({ id, label, className, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className={className || "nes-textarea"}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
