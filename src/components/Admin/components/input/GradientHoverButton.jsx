import { Button } from "@heroui/react";

const GradientHoverButton = ({
  text = "Click",
  onClick = () => {},
  isLoading = false,
  type = "submit",
  className,
}) => {
  return (
    <Button
      type={type}
      onPress={onClick}
      isLoading={isLoading}
      disabled={isLoading}
      className={`text-white px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition ${className}`}
    >
      {text}
    </Button>
  );
};

export default GradientHoverButton;
