import { Dimensions, StyleSheet, View } from "react-native";
import TitleTexts from "./onboarding/title-texts";

const FULL_WIDTH = Dimensions.get("window").width;

const InfoCard = (props: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  const { children, title, description } = props;

  return (
    <View style={style.wrapper}>
      <View>{children}</View>
      <TitleTexts
        title={title}
        style={style.textWrapper}
        descriptionStyle={style.text}
      >
        {description}
      </TitleTexts>
    </View>
  );
};

export default InfoCard;

const style = StyleSheet.create({
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
