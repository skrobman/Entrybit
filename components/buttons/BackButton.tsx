import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import { useColorScheme } from "nativewind";

const BackButton = ({ onPress, children, className }: ButtonProps) => {
  const { colorScheme } = useColorScheme();

  const arrowColor = colorScheme === "dark" ? "#FAFBFC" : "#07112E";

  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`mx-4 flex flex-row items-center gap-x-2 ${className}`}>
        <Svg width="26" height="26" viewBox="0 0 24 24">
          <Path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill={arrowColor}
          />
        </Svg>
        <Text className="text-light-txt-100 font-SoraSemiBold text-xl dark:text-dark-txt-100">
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
