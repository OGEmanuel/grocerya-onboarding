import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import CustomText from "../ui/custom-text";

const TitleTexts = (props: {
  style?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  title: string;
  children: ReactNode;
}) => {
  const { style, title, children, descriptionStyle } = props;

  return (
    <View style={[styles.textWrapper, style]}>
      <CustomText variant="title">{title}</CustomText>
      <CustomText style={descriptionStyle}>{children}</CustomText>
    </View>
  );
};

export default TitleTexts;

const styles = StyleSheet.create({
  textWrapper: {
    gap: 8,
  },
});
