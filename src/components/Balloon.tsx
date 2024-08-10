import React, { FC } from "react";

interface BalloonProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: "left" | "right";
  dark?: boolean;
}

const Balloon: FC<BalloonProps> = ({
  from = "left",
  dark = false,
  children,
  className = "",
  ...props
}) => {
  const fromClass = from === "left" ? "from-left" : "from-right";
  const darkClass = dark ? "is-dark" : "";

  return (
    <div
      className={`nes-balloon ${fromClass} ${darkClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Balloon;
