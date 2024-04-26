import { HTMLAttributes, InputHTMLAttributes } from "react";

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
  className?: string;
}

export interface FormProps extends HTMLAttributes<HTMLElement> {
  initialValues?: Object;
  validate?: ((values: any) => void | any);
}

export interface SelectOption {
  value: string;
  label: string;
  shorthand?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  id?: string;
  placeholder: string;
  prefixImage?: string;
  className?: string;
}

export interface TextSearchInputProps {
  id?: string;
  dataType?: string;
  decimal?: number;
  defaultText?: string;
  step?: string | number;
  onlyNumbers?: boolean;
  type?: string;
  name?: string;
  disabled?: boolean;
  disabledButFocusable?: boolean;
  value?: string;
  placeholder?: string;
  label?: boolean;
  hasIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
  classNameText?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  basePath?: boolean;
  onChange?: (data: any) => void;
  defaultOption?: string;
  options?: SelectOption[];
}