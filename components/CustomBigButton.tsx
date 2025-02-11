import React from "react";
import { Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-light-primary-200";
    case "secondary":
      return "bg-light-primary-100";
    case "dark-blue":
      return "bg-dark-primary-100";
    case "white":
      return "bg-white";
    case "disabled":
      return "bg-light-txt-300";
    default:
      return "bg-light-primary-200";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "white":
      return "text-light-surface-200";
    case "dirty-white":
      return "text-dark-primary-200";
    case "dark-blue":
      return "text-light-primary-300";
    case "blue":
      return "text-light-primary-200";
    case "grey":
      return "text-light-txt-200";
    case "light-grey":
      return "text-dark-txt-200";
    default:
      return "text-light-surface-200";
  }
};

const CustomBigButton = ({
  title,
  textVariant,
  bgVariant,
  className,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`${getBgVariantStyle(bgVariant)} w-full rounded-full p-4 justify-center items-center ${className}`}
    >
      <Text
        className={`${getTextVariantStyle(textVariant)} font-SoraBold text-lg`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBigButton;
