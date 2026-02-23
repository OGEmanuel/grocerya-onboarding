import { unitSize } from "@/constants/theme";
import { Pressable, StyleSheet, View } from "react-native";
import BackIcon from "../jsx-icons/back-icon";
import HelpButton from "../jsx-icons/help-button";

const Header = (props: { onPress?: () => void }) => {
  const { onPress } = props;
  return (
    <View style={[style.mainWrapper, onPress && style.wrapperDirectionRow]}>
      {onPress && (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => pressed && style.active}
        >
          <BackIcon />
        </Pressable>
      )}
      <View style={style.helpButton}>
        <HelpButton />
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  mainWrapper: {
    marginTop: unitSize.xl,
    justifyContent: "space-between",
  },
  wrapperDirectionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  active: {
    opacity: unitSize.opacity,
  },
  helpButton: {
    alignSelf: "flex-end",
  },
});
