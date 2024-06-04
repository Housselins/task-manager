import { ButtonProps } from "@/lib/interfaces";
import { FC } from "react";
import { Button } from "@nextui-org/react";

/**
 * CustomButton
 * 
 */
export const CustomButton: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};
