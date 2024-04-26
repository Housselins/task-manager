"use-client";
import { InputHTMLAttributes, ForwardedRef } from "react";
import { TextSearchInputProps } from "@/lib/interfaces";
import React from "react";
import { CustomText } from "../text/CustomText";
import { Input } from "./Input";

export const TextSearchInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextSearchInputProps & InputHTMLAttributes<HTMLInputElement>
> = (
  {
    id,
    name,
    style,
    dataType,
    step,
    onlyNumbers,
    placeholder = "",
    label = false,
    hasIcon,
    onChange,
    disabledButFocusable,
    disabled,
    className,
    value,
    classNameText,
    classNameLabel,
    basePath,
  },
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Rendered only when Icon */}
      {hasIcon && (
        <div className="relative w-[calc(15px)] top-[calc(25px)] left-[calc(10px)]"></div>
      )}

      {label && (
        <CustomText
          textType="content"
          className={classNameLabel}
          text={placeholder}
        />
      )}
      <Input
        style={style}
        pattern={onlyNumbers ? "^$d{1,3}(,d{3})*(.d+)?$" : ".*"}
        disabled={disabled}
        datatype={dataType}
        id={id}
        readOnly={disabledButFocusable}
        // style={disabledButFocusable ? { pointerEvents: "none" } : {}}
        value={value}
        onChange={onChange}
        name={name ?? ""}
        type={"text"}
        step={step}
        placeholder={placeholder}
        className={`h-[calc(40px)] ${
          hasIcon ? "pl-[calc(35px)]" : "pl-[calc(15px)]"
        } placeholder-principal-190 outline-principal-180 w-full ${
          disabled ? "bg-principal-460" : "bg-principal-150"
        } ${
          classNameText ?? "text-principal-180"
        } font-outfit text-[calc(15px)]`}
      />
    </div>
  );
};
