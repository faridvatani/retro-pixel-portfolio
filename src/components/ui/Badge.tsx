import React, { FC } from "react";

interface BadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "dark" | "primary" | "success" | "warning" | "error";
  split?: boolean;
  icon?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftClass?: string;
  rightClass?: string;
}

const Badge: FC<BadgeProps> = ({
  variant,
  split = false,
  icon = false,
  leftContent,
  rightContent,
  children,
  className = "",
  leftClass = "",
  rightClass = "",
  ...props
}) => {
  const splitClass = split ? "is-splited" : "";
  const iconClass = icon ? "is-icon" : "";
  const variantClass = variant ? `is-${variant}` : "";

  return (
    <a
      className={`nes-badge ${splitClass} ${iconClass} ${className}`}
      {...props}
    >
      {leftContent && (
        <span className={`${variantClass} ${leftClass}`}>{leftContent}</span>
      )}
      {rightContent && (
        <span className={`${variantClass} ${rightClass}`}>{rightContent}</span>
      )}
      {!leftContent && !rightContent && (
        <span className={variantClass}>{children}</span>
      )}
    </a>
  );
};

export default Badge;
