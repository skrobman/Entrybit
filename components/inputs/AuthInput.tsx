import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { icons } from "@/constants";
import ErrorAlert from "@/components/alerts/ErrorAlert";

const AuthInput = ({
  title,
  placeholder,
  className,
  secureTextEntry,
  placeholderTextColor,
  error = false,
  errorMessage = "",
  onChangeText,
  onBlur,
}: AuthInputProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className={`${className} mt-6`}>
        <Text
          className={`font-SoraSemiBold mb-2 ${
            error
              ? "text-light-alert-300"
              : "text-light-txt-100 dark:text-dark-txt-100"
          }`}
        >
          {title}
        </Text>
        <TextInput
          placeholder={placeholder}
          className={`bg-light-surface-300 border ${
            error
              ? "border-light-alert-300"
              : "border-light-surface-400 dark:border-dark-surface-400"
          } rounded py-3 px-4 font-SoraSemiBold text-light-txt-100 dark:bg-dark-surface-300 text-dark-txt-100`}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />
        {error && <ErrorAlert message={errorMessage} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthInput;
