import { useEffect } from "react";
import { Appearance } from "react-native";
import { useColorScheme } from "nativewind";

const UseThemeSwitch = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    const systemTheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { colorScheme, toggleTheme };
};

export default UseThemeSwitch;
