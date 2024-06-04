import { TextProps } from "@/lib/interfaces";
import { FC } from "react";

/**
 * CustomText
 * tipos de text
 * @param param0 
 * @returns 
 */
export const CustomText: FC<TextProps> = ({ text, textType, className }) => {
  if (textType == "title") return <h1 className={className}>{text}</h1>;
  if (textType == "subtitle") return <h2 className={className}>{text}</h2>;
  if (textType == "content") return <p className={className}>{text}</p>;
};
