import TabIconView from "@/components/tab-icon-view";
import CustomText from "@/components/ui/custom-text";
import { Colors } from "@/constants/theme";
import Home from "@/screens/home";
import Cart from "@/screens/home/cart";
import Favorite from "@/screens/home/favorite";
import Profile from "@/screens/home/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export const TABS = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Cart",
    component: Cart,
  },
  {
    name: "Favorite",
    component: Favorite,
  },
  {
    name: "Profile",
    component: Profile,
  },
];

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                backgroundColor: focused ? Colors.tertiaryGray : "transparent",
                borderRadius: 10,
                flex: 1,
                alignItems: "center",
                width: 84,
                justifyContent: "center",
              }}
            >
              <TabIconView name={route.name} focused={focused} color={color} />
              {focused && (
                <CustomText
                  style={{
                    color: Colors.primaryDark,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  {route.name}
                </CustomText>
              )}
            </View>
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryDark,
        tabBarInactiveTintColor: Colors.secondaryGray,
        tabBarItemStyle: {
          alignItems: "center",
          flex: 1,
        },
        tabBarStyle: {
          paddingHorizontal: 12,
          paddingTop: 12,
          paddingBottom: 28,
          backgroundColor: "white",
          justifyContent: "space-between",
          overflow: "visible",
          height: 84,
        },
      })}
    >
      {TABS.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabs;
