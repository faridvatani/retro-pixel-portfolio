import Image from "next/image";
import React, { FC } from "react";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size,
  rounded,
  className,
  width,
  height,
  ...props
}) => {
  const sizeClass = size ? `is-${size}` : "";
  const roundedClass = rounded ? "is-rounded" : "";
  // Todo: Add Utility function to convert string to number
  const numericWidth = typeof width === "string" ? parseInt(width, 10) : width;
  const numericHeight =
    typeof height === "string" ? parseInt(height, 10) : height;

  return (
    <Image
      src={src}
      alt={alt}
      width={numericWidth}
      height={numericHeight}
      className={`nes-avatar ${sizeClass} ${roundedClass} ${className || ""}`}
      style={{ imageRendering: "pixelated" }}
      {...props}
    />
  );
};

export default Avatar;
