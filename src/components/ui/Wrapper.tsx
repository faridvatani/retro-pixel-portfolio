import React, { FC } from "react";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  centered?: boolean;
  title?: string;
  rounded?: boolean;
  dark?: boolean;
}

export const Wrapper: FC<WrapperProps> = ({
  children,
  className = "",
  centered = false,
  title,
  rounded = false,
  dark = false,
}) => {
  const containerClasses = [
    "nes-container",
    className,
    centered ? "is-centered" : "",
    title ? "with-title" : "",
    dark ? "is-dark" : "",
    rounded ? "is-rounded" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {title && <p className="title">{title}</p>}
      {children}
    </div>
  );
};
