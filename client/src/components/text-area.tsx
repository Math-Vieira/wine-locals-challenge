import React from "react";
import { cn } from "../lib";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: string;
}

export const TextArea = React.forwardRef(
  ({ label, name, error, className, ...props }: TextAreaProps, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor={name}>
          {label}
        </label>
        <textarea
          className={cn("rounded-md px-2 py-1.5 text-black", className)}
          id={name}
          {...props}
        />
        <span className="text-red-500">{error}</span>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
