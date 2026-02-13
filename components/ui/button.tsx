import { Colors, FontName } from "@/constants/theme";
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
      android: FontName.android.medium,
      ios: FontName.ios.medium,
    }),
  },
  primaryWrapper: {
    backgroundColor: Colors.primaryDark,
  },
  secondaryWrapper: {
    backgroundColor: Colors.primaryOffWhite,
  },
  primaryText: {
    color: Colors.primaryLight,
  },
  secondaryText: {
    color: Colors.primaryDark,
  },
  pressed: {
    opacity: 0.75,
  },
});
