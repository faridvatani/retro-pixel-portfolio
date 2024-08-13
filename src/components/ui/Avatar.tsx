import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
  rounded?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size,
  rounded,
  className = "",
  style,
  ...props
}) => {
  const sizeClass = size ? `is-${size}` : "";
  const roundedClass = rounded ? "is-rounded" : "";

  return (
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className={`nes-avatar ${sizeClass} ${roundedClass} ${className}`}
      style={{ imageRendering: "pixelated", ...style }}
      {...props}
    />
  );
};

export default Avatar;
