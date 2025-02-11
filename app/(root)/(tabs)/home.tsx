import { View, Text, Button, Switch, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className={`flex-1 items-center p-5 dark:bg-dark-background`}>
      <Text className={`text-2xl dark:text-white`}>Home Page</Text>
      <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
