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
    paddingHorizontal: 20,
  },
  active: {
    backgroundColor: "#0D0D0D",
  },
  inactive: {
    backgroundColor: "#F2F2F3",
  },
  indicator: {
    height: 3,
    borderRadius: 100,
    flex: 1,
  },
});
