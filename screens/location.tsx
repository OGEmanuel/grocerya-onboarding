import InfoCard from "@/components/info-card";
import Location from "@/components/jsx-icons/location";
import Header from "@/components/onboarding/header";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import { Nav } from "@/constants";
import { unitSize } from "@/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

const LocationScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaWrapper style={style.container}>
      <Header onPress={() => navigation.navigate("Category")} />
      <InfoCard
        title="Set your location"
        description="This let us know your location for best shipping experience"
        style={style.infoCard}
      >
        <Location />
      </InfoCard>
      <View style={style.buttonContainer}>
        <View style={style.buttonViewStyle}>
          <Button
            label="Allow Google Maps"
            onPress={() => navigation.push("Notification")}
          />
        </View>
        <View style={style.buttonViewStyle}>
          <Button
            variant="secondary"
            label="Set Manually"
            onPress={() => navigation.navigate("Notification")}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default LocationScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: unitSize.md,
    justifyContent: "space-between",
    paddingBottom: unitSize.md,
  },
  infoCard: {
    gap: 40,
    width: "auto",
  },
  buttonContainer: {
    gap: 16,
  },
  buttonViewStyle: {
    flexDirection: "row",
  },
});
