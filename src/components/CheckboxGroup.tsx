import React, { FC, useState } from "react";

interface CheckboxOption extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  checked: boolean;
  dark?: boolean;
}

interface CheckboxGroupProps {
  className?: string;
  options: CheckboxOption[];
  onChange: (options: CheckboxOption[]) => void;
}

const Checkbox: FC<{ option: CheckboxOption; onChange: () => void }> = ({
  option,
  onChange,
}) => (
  <label>
    <input
      type="checkbox"
      className={`nes-checkbox ${option.dark ? "is-dark" : ""}`}
      onChange={onChange}
      {...option}
    />
    <span>{option.label}</span>
  </label>
);

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  className,
  options,
  onChange,
  ...props
}) => {
  const [checkboxOptions, setCheckboxOptions] =
    useState<CheckboxOption[]>(options);

  const handleCheckboxChange = (index: number) => {
    const newOptions = [...checkboxOptions];
    newOptions[index].checked = !newOptions[index].checked;
    setCheckboxOptions(newOptions);
    onChange(newOptions);
  };

  return (
    <div className={className} {...props}>
      {checkboxOptions.map((option, index) => (
        <Checkbox
          key={index}
          option={option}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
