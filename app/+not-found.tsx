import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <SafeAreaView>
        <Text className="text-2xl">Sorry,this page doesnt exist</Text>
      </SafeAreaView>
    </>
  );
}
