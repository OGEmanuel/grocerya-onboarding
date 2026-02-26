import CategoryScreen from "@/screens/category";
import GetStartedScreen from "@/screens/get-started";
import Intro from "@/screens/intro";
import LocationScreen from "@/screens/location";
import NotificationsScreen from "@/screens/notifications";
import VerifyScreen from "@/screens/verify";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Intro} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Notification" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}
