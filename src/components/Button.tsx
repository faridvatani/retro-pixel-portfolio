import Link from "next/link";
import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
  variant?: "primary" | "success" | "warning" | "error" | "disabled";
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  className = "nes-btn",
  href,
  variant,
  ...props
}) => {
  const variantClass = variant ? `is-${variant}` : "";
  const combinedClassName = `nes-btn ${className} ${variantClass}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
