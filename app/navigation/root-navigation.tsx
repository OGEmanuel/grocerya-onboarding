import CategoryScreen from "@/screens/category";
import GetStartedScreen from "@/screens/get-started";
import Intro from "@/screens/intro";
import LocationScreen from "@/screens/location";
import NotificationsScreen from "@/screens/notifications";
import VerifyScreen from "@/screens/verify";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./drawer-navigation";

const Stack = createNativeStackNavigator();

const SCREENS = [
  {
    name: "Intro",
    component: Intro,
  },
  {
    name: "GetStarted",
    component: GetStartedScreen,
  },
  {
    name: "Verify",
    component: VerifyScreen,
  },
  {
    name: "Category",
    component: CategoryScreen,
  },
  {
    name: "Location",
    component: LocationScreen,
  },
  {
    name: "Notification",
    component: NotificationsScreen,
  },
  {
    name: "DrawerTabs",
    component: MyDrawer,
  },
];

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {SCREENS.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}
