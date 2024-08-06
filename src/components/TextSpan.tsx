import React, { FC } from "react";

interface TextSpanProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "success" | "warning" | "error" | "disabled";
}

const TextSpan: FC<TextSpanProps> = ({
  children,
  className,
  variant = "primary",
}) => {
  return (
    <span className={`nes-text is-${variant} ${className}`}>{children}</span>
  );
};

export default TextSpan;
