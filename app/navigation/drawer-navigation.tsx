import TabIconView from "@/components/tab-icon-view";
import CustomText from "@/components/ui/custom-text";
import { Colors, unitSize } from "@/constants/theme";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";
import HomeTabs, { TABS } from "./home-navigation";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const homeTabsRoute = props.state.routes.find(
    (route) => route.name === "HomeTabs",
  );

  const tabState = homeTabsRoute?.state as any;

  const currentTab = tabState?.routeNames?.[tabState.index] ?? "Home";

  return (
    <DrawerContentScrollView {...props}>
      <View style={style.mainContainer}>
        <View style={style.introContainer}>
          <View style={style.imgContainer}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dl56ef7sx/image/upload/v1772598809/Emmanuel_Ogunmola_c8uqew.jpg",
              }}
              style={style.img}
            />
          </View>
          <CustomText variant="title">Emmanuel Ogunmola</CustomText>
        </View>
        <View>
          {TABS.map((tab) => {
            const focused = currentTab === tab.name;

            return (
              <DrawerItem
                key={tab.name}
                label={tab.name}
                focused={focused}
                activeTintColor={Colors.primaryDark}
                activeBackgroundColor={Colors.tertiaryGray}
                icon={({ color }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: focused
                          ? Colors.tertiaryGray
                          : "transparent",
                      }}
                    >
                      <TabIconView
                        name={tab.name}
                        focused={focused}
                        color={color}
                      />
                    </View>
                  );
                }}
                onPress={() =>
                  props.navigation.navigate("HomeTabs", { screen: tab.name })
                }
              />
            );
          })}
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "left",
        swipeEnabled: true,
        drawerType: "slide",
        swipeEdgeWidth: 120,
        headerShown: false,
        drawerActiveTintColor: Colors.primaryDark,
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name={"HomeTabs"} component={HomeTabs} />
    </Drawer.Navigator>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    gap: unitSize.md,
  },
  imgContainer: {
    width: 56,
    height: 56,
    borderRadius: 99,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  introContainer: {
    gap: 8,
  },
});
