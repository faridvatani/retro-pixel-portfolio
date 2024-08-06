import Link from "next/link";
import React, { FC } from "react";

enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

enum ButtonVariant {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Error = "error",
  Disabled = "disabled",
}

interface ButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  type = ButtonType.Button,
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
