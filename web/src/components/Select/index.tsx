import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: Array<{ label: string; value: string }>;
}

const Select: React.FC<SelectProps> = ({ id, label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={id}>{label}</label>
      <select value="" id={id} {...rest}>
        <option value="" disabled hidden>
          Select an option
        </option>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
