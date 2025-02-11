import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { icons } from "@/constants";
import CustomBigButton from "@/components/CustomBigButton";

const WelcomePage = () => {
  return (
    <SafeAreaView className="mx-4 flex-1 ">
      {/* Header Section */}
      <View className="flex-row items-center py-5 relative">
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
              className="text-light-primary-200"
              style={{ fontFamily: "Sora-SemiBold", fontSize: 18 }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Section */}
      <View className="flex-1">
        <Text
          className="text-light-txt-100 mt-5 font-SoraSemiBold"
          style={{ fontSize: 23 }}
        >
          Unlock the World of Crypto Investments
        </Text>
        <Text className="text-light-txt-200 mt-2 font-SoraRegular">
          From Bitcoin to altcoins, explore endless opportunities. Start your
          journey today, and let your investments reach new heights.
        </Text>
      </View>

      {/* Bottom Buttons Section */}
      <View className="mt-auto mb-6">
        <CustomBigButton
          title="Create an account"
          textVariant="white"
          bgVariant="primary"
          className="mb-4"
        />
        <CustomBigButton
          title="Continue with Metamask"
          textVariant="dark-blue"
          bgVariant="secondary"
          className="mb-7"
        />
        <View className="bg-light-surface-100 p-5 rounded-M">
          <Text className="text-light-txt-200 font-SoraRegular text-base">
            By signing up, you agree to our{" "}
            <Text className="text-light-primary-200">Terms</Text>,{" "}
            <Text className="text-light-primary-200">Privacy</Text>,{" "}
            <Text className="text-light-primary-200">Policy</Text>, and{" "}
            <Text className="text-light-primary-200">Cookie Use.</Text>
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default WelcomePage;
