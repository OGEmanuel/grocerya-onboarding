import { unitSize } from "@/constants/theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";
import SafeAreaWrapper from "./safe-area-wrapper";
import CustomText from "./ui/custom-text";

type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

type DrawerNav = DrawerNavigationProp<DrawerParamList>;

const HomeWrapper = (props: {
  page: string;
  fullName?: string;
  emailAddress?: string;
}) => {
  const { page, fullName, emailAddress } = props;
  const navigation = useNavigation<DrawerNav>();

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        {page === "Home" && (
          <Pressable
            onPress={() => navigation.openDrawer()}
            style={style.trigger}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1772598809/Emmanuel_Ogunmola_c8uqew.jpg",
              }}
              style={style.img}
            />
          </Pressable>
        )}
        <View style={style.main}>
          <CustomText style={style.text} variant="title">
            {page}
          </CustomText>
          {page === "Profile" && (
            <View>
              <CustomText>Full Name: {fullName}</CustomText>
              <CustomText>Email Address: {emailAddress}</CustomText>
            </View>
          )}
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeWrapper;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingHorizontal: unitSize.md,
    paddingTop: unitSize.md,
  },
  text: {
    textAlign: "center",
  },
  trigger: {
    width: 48,
    height: 48,
    borderRadius: 99,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    gap: unitSize.md,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
