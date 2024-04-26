import { type InputProps } from "@/lib/interfaces";
import { type FC } from "react";

export const Input: FC<InputProps> = (props) => {
  const { value, type, name, id, placeholder, className } = props;
  return (
    <input
      {...props}
      type={type}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      className={`"px-4 py-2.5 ${className}`}
    ></input>
  );
};

export type { InputProps };
