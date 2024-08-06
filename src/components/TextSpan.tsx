import React, { FC } from "react";

interface TextSpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "success" | "warning" | "error" | "disabled";
}

const TextSpan: FC<TextSpanProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <span className={`nes-text is-${variant} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default TextSpan;
