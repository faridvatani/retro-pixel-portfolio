import React, { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
  dark?: boolean;
  isInline?: boolean;
  variant?: "success" | "warning" | "error" | "disabled";
}

const Input: FC<InputProps> = ({
  id,
  label,
  className,
  dark,
  isInline,
  variant,
  ...props
}) => {
  return (
    <div
      className={`nes-field 
        ${className}
        ${isInline && "is-inline"}`}
    >
      <label htmlFor={id} className={`${dark && "text-white"}`}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        className={`nes-input  ${dark && " is-dark"} ${
          variant && `is-${variant}`
        }`}
        {...props}
      />
    </div>
  );
};

export default Input;
