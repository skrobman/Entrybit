import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import BackButton from "@/components/buttons/BackButton";
import AuthInput from "@/components/inputs/AuthInput";
import CustomBigButton from "@/components/buttons/CustomBigButton";
import useThemeSwitch from "@/hooks/useThemeSwitch";

const SignUp = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const { colorScheme } = useThemeSwitch();

  const textInputColor = colorScheme === "dark" ? "#BDBEC0" : "#51586D";
  const accountBtnBg = colorScheme === "dark" ? "blue" : "primary";

  const validateEmailOrPhone = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  return (
    <SafeAreaView className="flex-1 dark:bg-dark-surface-200">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="pb-20">
            <BackButton className="mx-4 pt-5" onPress={() => router.back()}>
              Create an Account
            </BackButton>

            <View className="mx-4 pt-9">
              <Text
                className="font-SoraSemiBold text-light-txt-100 dark:text-dark-txt-100"
                style={{ fontSize: 22, lineHeight: 32 }}
              >
                Join Us Today! Sign Up for a New Account
              </Text>
              <Text className="text-light-txt-200 mt-2 font-SoraRegular dark:text-dark-txt-200">
                Ready to explore a world of possibilities? Sign up now to create
                your account.
              </Text>
            </View>

            <View>
              <AuthInput
                className="mx-4"
                title="Email Address/ Phone Number"
                placeholder="user@gmail.com"
                placeholderTextColor={textInputColor}
                secureTextEntry={false}
                onChangeText={setEmailOrPhone}
                error={emailTouched && !validateEmailOrPhone(emailOrPhone)}
                errorMessage="Invalid email or phone number"
                onBlur={() => setEmailTouched(true)}
              />
              <AuthInput
                className="mx-4"
                title="Create Password"
                placeholder="●●●●●●●●"
                placeholderTextColor={textInputColor}
                secureTextEntry={true}
                error={passwordTouched && password.length < 8}
                errorMessage="Must be at least 8 characters"
                onChangeText={setPassword}
                onBlur={() => setPasswordTouched(true)}
              />
              <AuthInput
                className="mx-4"
                title="Confirm Password"
                placeholder="Confirm Password"
                placeholderTextColor={textInputColor}
                secureTextEntry={true}
                error={confirmTouched && confirmPassword !== password}
                errorMessage="Passwords do not match"
                onChangeText={setConfirmPassword}
                onBlur={() => setConfirmTouched(true)}
              />
            </View>
          </ScrollView>
          <View className="absolute bottom-0 left-0 right-0 mx-4 mb-2">
            <CustomBigButton title="Create Account" bgVariant={accountBtnBg} />
          </View>
        </View>
      </KeyboardAvoidingView>

      <StatusBar barStyle="auto" />
    </SafeAreaView>
  );
};

export default SignUp;
