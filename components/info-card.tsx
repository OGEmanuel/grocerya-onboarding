import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";

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
      <View style={style.textWrapper}>
        <Text style={style.title}>{title}</Text>
        <Text style={[style.text, style.description]}>{description}</Text>
      </View>
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
    gap: 8,
  },
  text: {
    textAlign: "center",
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Platform.select({
      android: "Poppins_600SemiBold",
      ios: "Poppins-SemiBold",
    }),
  },
  description: {
    fontSize: 16,
    color: "#777777",
    lineHeight: 25.6,
    fontFamily: Platform.select({
      android: "Poppins_400Regular",
      ios: "Poppins-Regular",
    }),
  },
});
