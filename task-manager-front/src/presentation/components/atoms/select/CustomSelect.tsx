"use client";
import React, { forwardRef } from "react";
import Select from "react-select";

type Option = {
  value: string;
  label: string;
};

interface CustomSelectProps {
  placeholder?: string;
  options: Option[];
  name?: string;
  onChange: (option: Option) => void;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<Option>>;
  disabled?: boolean;
  className?: string;
}

const CustomSelect = forwardRef<HTMLDivElement, CustomSelectProps>(
  (
    {
      placeholder,
      options,
      name,
      onChange,
      value,
      setValue,
      disabled,
      className,
    },
    ref
  ) => {
    const customStyles = {
      control: (base: any, state: any) => ({
        ...base,
        minHeight: "40px",
        height: "40px",
        borderColor: state.isFocused || state.isHovered ? "#003DA5" : "none",
        boxShadow: state.isFocused ? "0 0 0 1px #003DA5" : "#003DA5",
        "&:hover": {
          borderColor: state.isFocused ? "#003DA5" : "none",
        },
        boxSizing: "border-box", // Include padding and border in element's height
      }),
      menu: (base: any) => ({ ...base, zIndex: 9999 }),
      valueContainer: (base: any) => ({
        ...base,
        height: "40px",
        padding: "0 12px",
        color: "#003DA5",
      }),
      input: (base: any) => ({
        ...base,
        margin: "0px",
        padding: "0px",
        color: "#003DA5",
      }),
      singleValue: (base: any, state: any) => ({
        ...base,
        color: value.value == 0 ? "#003da580 " : "#003DA5",
        fontSize: "13px",
        fontFamily: "Poppins-Regular",
      }),
      placeholder: (base: any) => ({
        ...base,
        margin: "0px",
        padding: "0px",
        paddingBottom: "3.8px",
        whiteSpace: "nowrap",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#003da580 ",
      }),
      option: (base: any, state: any) => ({
        ...base,
        color: state.isSelected ? "white" : "#003DA5", // Cambia el color del texto aquí
      }),
    };

    return (
      <Select
        instanceId={"1m2o1m2"}
        classNamePrefix="custom-select"
        className={`w-full h-[calc(40px)] ${className}`}
        value={value}
        onChange={(option: any) => {
          onChange(option);
          setValue(option);
        }}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        isDisabled={disabled}
        name={name}
      />
    );
  }
);
CustomSelect.displayName = "CustomSelect";
export { CustomSelect };
