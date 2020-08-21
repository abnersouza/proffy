import React, { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest} />
    </div>
  );
};

export default Textarea;
