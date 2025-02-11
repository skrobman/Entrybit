import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appearance,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "@/constants";
import CustomBigButton from "@/components/CustomBigButton";
import useThemeSwitch from "@/hooks/useThemeSwitch";

const WelcomePage = () => {
  const { colorScheme } = useThemeSwitch();
  const accountBtnBg = colorScheme === "dark" ? "blue" : "primary";
  const metamaskBtnBg = colorScheme === "dark" ? "dark-blue" : "secondary";
  const metamaskTxtColor = colorScheme === "dark" ? "dirty-white" : "dark-blue";

  return (
    <SafeAreaView className="flex-1 dark:bg-dark-surface-200">
      {/* Header Section */}
      <View className="mx-4 flex-row items-center py-5 relative">
        <View className="flex-1 items-center">
          <Image
            source={icons.appLogo}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>
        <View className="absolute right-0">
          <TouchableOpacity>
            <Text
              className="text-light-primary-200 dark:text-dark-txt-400"
              style={{ fontFamily: "Sora-SemiBold", fontSize: 18 }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Section */}
      <View className="mx-4 flex-1">
        <Text
          className="text-light-txt-100 mt-5 font-SoraSemiBold dark:text-dark-txt-100"
          style={{ fontSize: 23 }}
        >
          Unlock the World of Crypto Investments
        </Text>
        <Text className="text-light-txt-200 mt-2 font-SoraRegular dark:text-dark-txt-200">
          From Bitcoin to altcoins, explore endless opportunities. Start your
          journey today, and let your investments reach new heights.
        </Text>
      </View>

      {/* Bottom Buttons Section */}
      <View className="mx-4 mt-auto mb-2">
        <CustomBigButton
          title="Create an account"
          textVariant="white"
          bgVariant={accountBtnBg}
          className="mb-4"
        />
        <CustomBigButton
          title="Continue with Metamask"
          textVariant={metamaskTxtColor}
          bgVariant={metamaskBtnBg}
          className="mb-7"
        />
        <View className="bg-light-surface-100 p-5 rounded-M dark:bg-dark-surface-100">
          <Text className="text-light-txt-200 font-SoraRegular text-base dark:text-dark-txt-200">
            By signing up, you agree to our{" "}
            <Text className="text-light-primary-200 dark:text-dark-txt-400">
              Terms
            </Text>
            ,{" "}
            <Text className="text-light-primary-200 dark:text-dark-txt-400">
              Privacy
            </Text>
            ,{" "}
            <Text className="text-light-primary-200 dark:text-dark-txt-400">
              Policy
            </Text>
            , and{" "}
            <Text className="text-light-primary-200 dark:text-dark-txt-400">
              Cookie Use.
            </Text>
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default WelcomePage;
