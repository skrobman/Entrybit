declare interface ButtonProps {
  title: string;
  bgVariant?:
    | "primary"
    | "secondary"
    | "dark-blue"
    | "blue"
    | "white"
    | "disabled";
  textVariant?:
    | "white"
    | "dark-blue"
    | "blue"
    | "grey"
    | "light-grey"
    | "dirty-white";
  className?: string;
  onPress?: () => void;
  children?: string;
}

type AuthInputProps = {
  title: string;
  placeholder: string;
  className?: string;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  error?: boolean;
  onChangeText?: (text: string) => void;
  errorMessage?: string;
  onBlur?: () => void;
};

type TimerProps = {
  initialTime: number;
  activeLabel?: string;
  expiredLabel?: string;
  containerClass?: string;
  textClass?: string;
  expiredTextClass?: string;
  onTimerEnd?: () => void;
};
