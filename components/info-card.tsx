import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import TitleTexts from "./onboarding/title-texts";

const FULL_WIDTH = Dimensions.get("window").width;

const InfoCard = (props: {
  children: React.ReactNode;
  title: string;
  description: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const { children, title, description, style } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <View>{children}</View>
      <TitleTexts
        title={title}
        style={styles.textWrapper}
        descriptionStyle={styles.text}
      >
        {description}
      </TitleTexts>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  wrapper: {
    gap: 28,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 9,
    width: FULL_WIDTH,
  },
  textWrapper: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
