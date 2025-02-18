import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Timer = ({
  initialTime,
  activeLabel,
  expiredLabel,
  containerClass,
  textClass,
  expiredTextClass,
  onTimerEnd,
}: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const isExpired = timeLeft === 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onTimerEnd?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      className={`bg-light-surface-100 w-[140px] self-center rounded-M ${containerClass}`}
    >
      <View className="py-3 px-3">
        <Text
          className={`text-light-txt-200 font-SoraRegular text-[13px] text-center 
          ${isExpired ? expiredTextClass : ""}`}
        >
          {isExpired ? expiredLabel : activeLabel}
        </Text>
        <Text
          className={`font-SoraBold text-2xl text-center mt-2 
          ${isExpired ? "text-light-alert-300" : "text-light-primary-200"} ${textClass}`}
        >
          {formatTime(timeLeft)}
        </Text>
      </View>
    </View>
  );
};

export default Timer;
