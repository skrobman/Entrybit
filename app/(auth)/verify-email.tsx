import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/buttons/BackButton";
import VerifyLinkLogo from "@/assets/images/sign-up/verifyLinkLogo";
import { useEffect, useState } from "react";
import CustomBigButton from "@/components/buttons/CustomBigButton";
import Timer from "@/components/timer/Timer";

const VerifyEmail = () => {
  const [timeLeft, setTimeLeft] = useState(900);
  const timerColor =
    timeLeft === 0 ? "text-light-alert-300" : "text-light-primary-200";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array = runs only on mount

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <SafeAreaView className="flex-1 dark:bg-dark-surface-200">
      <View className="py-2">
        <BackButton title={""} />
      </View>
      <View className="mt-12 items-center">
        <VerifyLinkLogo />
      </View>
      <View className="items-center mx-4 mt-12">
        <Text className="font-SoraSemiBold text-light-txt-100">
          Confirm Your Account for Full Access
        </Text>
        <Text className="text-light-txt-200 font-SoraRegular text-[13px] mt-2">
          Thanks for signing up! To ensure the security of your account, please
          click the confirmation link we sent to your email or enter the code
          sent to your phone. Welcome to our community!
        </Text>
      </View>
      <Timer
        initialTime={900}
        activeLabel="Link is valid for"
        expiredLabel="Link is expired"
        containerClass="mt-6"
        expiredTextClass="text-red-600"
      />
      <View className="mt-auto mx-4">
        <Text className="text-light-txt-200 font-SoraRegular text-[13px] text-center mb-6">
          Didn’t receive the link? It must be on our side. Try request one more
          time :)
        </Text>
        <CustomBigButton
          title={"Resend Email"}
          bgVariant="secondary"
          textVariant="dark-blue"
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
