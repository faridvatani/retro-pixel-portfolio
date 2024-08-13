import React, { FC } from "react";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  type:
    | "heart"
    | "star"
    | "like"
    | "twitter"
    | "facebook"
    | "instagram"
    | "github"
    | "google"
    | "gmail"
    | "medium"
    | "linkedin"
    | "twitch"
    | "youtube"
    | "reddit"
    | "whatsapp"
    | "close"
    | "trophy"
    | "coin"
    | "nes-logo"
    | "nes-jp-logo"
    | "snes-logo"
    | "snes-jp-logo"
    | "nes-octocat"
    | "nes-smartphone"
    | "nes-phone"
    | "nes-mario"
    | "nes-ash"
    | "nes-pokeball"
    | "nes-bulbasaur"
    | "nes-charmander"
    | "nes-squirtle"
    | "nes-kirby";
  size?: "small" | "medium" | "large";
  state?: "half" | "transparent" | "empty";
  animate?: boolean;
}

const Icon: FC<IconProps> = ({
  type,
  size = "medium",
  state,
  animate = false,
  className = "",
  ...props
}) => {
  const sizeClass = size ? `is-${size}` : "";
  const stateClass = state ? `is-${state}` : "";
  const animateClass = animate ? "animate" : "";

  return (
    <i
      className={`nes-icon ${type} ${sizeClass} ${stateClass} ${animateClass} ${className}`}
      {...props}
    ></i>
  );
};

export default Icon;
