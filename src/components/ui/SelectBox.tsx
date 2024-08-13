import React, { FC } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  className?: string;
  variant?: "success" | "warning" | "error" | "dark";
  required?: boolean;
  items: {
    value: string;
    text: string;
    disabled?: boolean;
    hidden?: boolean;
  }[];
}

const SelectBox: FC<SelectProps> = ({
  id,
  label,
  className = "",
  variant,
  required = false,
  items,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className={`${variant === "dark" && "text-white"}`}>
        {label}
      </label>
      <div className={`nes-select ${variant && `is-${variant}`}`}>
        <select required={required} id={id} {...props}>
          {items.map((item) => (
            <option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              hidden={item.hidden}
            >
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
