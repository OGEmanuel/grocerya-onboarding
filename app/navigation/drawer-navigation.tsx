import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TABS } from "./home-navigation";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "left",
        swipeEnabled: true,
        drawerType: "slide",
        swipeEdgeWidth: 120,
      }}
    >
      <GestureHandlerRootView>
        {TABS.map((tab) => (
          <Drawer.Screen name={tab.name} component={tab.component} />
        ))}
      </GestureHandlerRootView>
    </Drawer.Navigator>
  );
}
