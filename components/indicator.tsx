import { Colors, unitSize } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Indicator = (props: { page: number; totalPages: number }) => {
  const { page, totalPages } = props;

  return (
    <View style={style.wrapper}>
      {Array(totalPages)
        .fill(0)
        .map((_, i) => (
          <View
            key={i}
            style={[
              style.indicator,
              page === i ? style.active : style.inactive,
            ]}
          ></View>
        ))}
    </View>
  );
};

export default Indicator;

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 2,
    paddingTop: 40,
    paddingHorizontal: unitSize.md,
  },
  active: {
    backgroundColor: Colors.primaryDark,
  },
  inactive: {
    backgroundColor: Colors.primaryOffWhite,
  },
  indicator: {
    height: 3,
    borderRadius: 100,
    flex: 1,
  },
});
