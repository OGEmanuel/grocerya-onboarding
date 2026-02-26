import Notification from "@/components/jsx-icons/notification";
import Header from "@/components/onboarding/header";
import TitleTexts from "@/components/onboarding/title-texts";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import { Nav } from "@/constants";
import { unitSize } from "@/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

const NotificationsScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaWrapper style={style.container}>
      <View style={style.headerStyle}>
        <Header onPress={() => navigation.navigate("Location")} />
        <TitleTexts title="Lastly, please enable notification">
          Enable your notifications for more update and important messages about
          your grocery needs
        </TitleTexts>
      </View>
      <View style={style.iconStyle}>
        <Notification />
      </View>
      <View style={style.buttonContainer}>
        <View style={style.buttonViewStyle}>
          <Button label="Enable Notifications" />
        </View>
        <View style={style.buttonViewStyle}>
          <Button variant="secondary" label="Skip For Now" />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default NotificationsScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: unitSize.md,
    paddingBottom: unitSize.md,
    flex: 1,
    justifyContent: "space-between",
  },
  headerStyle: {
    gap: 42,
  },
  buttonContainer: {
    gap: 16,
  },
  buttonViewStyle: {
    flexDirection: "row",
  },
  iconStyle: {
    alignItems: "center",
  },
});
