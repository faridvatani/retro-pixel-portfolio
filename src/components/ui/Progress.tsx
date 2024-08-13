import React, { FC } from "react";

type Variant = "primary" | "success" | "warning" | "error" | "pattern";

interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  variant?: Variant;
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
