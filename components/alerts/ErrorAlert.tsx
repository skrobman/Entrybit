import { Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

type ErrorAlertProps = {
  message: string;
};

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <View className="flex flex-row items-center mt-2 ml-1 gap-x-1">
      <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z"
          fill="#B84A72"
        />
      </Svg>
      <Text className="text-light-alert-300 font-SoraRegular">{message}</Text>
    </View>
  );
};

export default ErrorAlert;
