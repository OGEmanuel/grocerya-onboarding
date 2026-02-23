import { Colors } from "@/constants/theme";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeAreaWrapper = (props: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const { children, style } = props;
  return (
    <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
  );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
});
