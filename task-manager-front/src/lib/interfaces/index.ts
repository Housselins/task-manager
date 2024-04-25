import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLInputElement> {
  buttonType: "primary" | "secondary";
  label: string;
  className: string;
  onClick?: (event: any) => void;
  disabled?: boolean;
}

export interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  textType: "title" | "subtitle" | "content";
  text: string;
  className: string;
}

export interface FormProps extends HTMLAttributes<HTMLElement> {
  initialValues?: Object;
  validate?: ((values: any) => void | any);
}
