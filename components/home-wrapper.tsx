import { StyleSheet, View } from "react-native";
import SafeAreaWrapper from "./safe-area-wrapper";
import CustomText from "./ui/custom-text";

const HomeWrapper = (props: { page: string }) => {
  const { page } = props;
  // const navigation = useNavigation<DrawerNavigationProp<Nav>>();
  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        {/* <Pressable onPress={() => navigation.openDrawer()}>
          <ProfileIcon />
        </Pressable> */}
        <CustomText style={style.text} variant="title">
          {page}
        </CustomText>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeWrapper;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
