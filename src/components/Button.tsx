import Link from "next/link";
import React, { FC } from "react";

interface ButtonProps {
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
}) => {
  const variantClass = variant ? `is-${variant}` : "";
  const combinedClassName = `${className} ${variantClass}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
