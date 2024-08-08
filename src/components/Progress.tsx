import React, { FC } from "react";

interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  variant?: "primary" | "success" | "warning" | "error" | "pattern";
  className?: string;
}

const Progress: FC<ProgressProps> = ({ variant, className, ...props }) => {
  const variantClass = variant ? `is-${variant}` : "";
  return (
    <progress
      className={`nes-progress ${variantClass} ${className || ""}`}
      {...props}
    ></progress>
  );
};

export default Progress;
