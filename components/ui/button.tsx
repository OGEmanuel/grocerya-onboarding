import { Platform, Pressable, StyleSheet, Text } from "react-native";

const Button = (props: {
  variant?: "primary" | "secondary";
  label: string;
  onPress?: () => void;
}) => {
  const { variant = "primary", label, onPress } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        style.wrapper,
        variant === "primary" ? style.primaryWrapper : style.secondaryWrapper,
        pressed && style.pressed,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          style.text,
          variant === "primary" ? style.primaryText : style.secondaryText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const style = StyleSheet.create({
  wrapper: {
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
  text: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: Platform.select({
      android: "Poppins_500Medium",
      ios: "Poppins-Medium",
    }),
  },
  primaryWrapper: {
    backgroundColor: "#0D0D0D",
  },
  secondaryWrapper: {
    backgroundColor: "#F2F2F3",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "#0D0D0D",
  },
  pressed: {
    opacity: 0.75,
  },
});
