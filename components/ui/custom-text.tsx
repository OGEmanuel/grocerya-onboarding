import { Colors, FontName, unitSize } from "@/constants/theme";
import React from "react";
import { Platform, StyleProp, StyleSheet, Text, TextStyle } from "react-native";

const CustomText = (props: {
  children: React.ReactNode;
  variant?: "title" | "description" | "destructive";
  style?: StyleProp<TextStyle>;
}) => {
  const { children, variant = "description", style } = props;

  return (
    <Text
      style={[
        variant === "description" && styles.description,
        variant === "title" && styles.title,
        variant === "destructive" && styles.destructive,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  title: {
    fontWeight: 600,
    fontSize: unitSize.md,
    lineHeight: 24,
    fontFamily: Platform.select({
      android: FontName.android.semibold,
      ios: FontName.ios.semibold,
    }),
  },
  description: {
    fontSize: 16,
    color: Colors.primaryGray,
    lineHeight: 25.6,
    fontFamily: Platform.select({
      android: FontName.android.regular,
      ios: FontName.ios.regular,
    }),
  },
  destructive: {
    color: "red",
    paddingLeft: 4,
  },
});
