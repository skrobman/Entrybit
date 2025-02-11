import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Slot } from "expo-router";
import "react-native-reanimated";
import "../global.css";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@/lib/auth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  const [loaded] = useFonts({
    SoraThin: require("../assets/fonts/Sora-Thin.ttf"),
    SoraExtraLight: require("../assets/fonts/Sora-ExtraLight.ttf"),
    SoraLight: require("../assets/fonts/Sora-Light.ttf"),
    SoraRegular: require("../assets/fonts/Sora-Regular.ttf"),
    SoraMedium: require("../assets/fonts/Sora-Medium.ttf"),
    SoraSemiBold: require("../assets/fonts/Sora-SemiBold.ttf"),
    SoraBold: require("../assets/fonts/Sora-Bold.ttf"),
    SoraExtraBold: require("../assets/fonts/Sora-ExtraBold.ttf"),
  });

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
    );
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
