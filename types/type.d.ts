declare interface ButtonProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "dark-blue" | "white" | "disabled";
  textVariant?:
    | "white"
    | "dark-blue"
    | "blue"
    | "grey"
    | "light-grey"
    | "dirty-white";
  className?: string;
}
