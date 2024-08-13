import React, { FC } from "react";

interface RadioOption extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  checked: boolean;
  dark?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ name, options, onChange }) => {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            className={`nes-radio ${option.dark ? "is-dark" : ""}`}
            name={name}
            onChange={() => onChange && onChange(option.value)}
            {...option}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
