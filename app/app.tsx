import { RootStackParamListMain } from "@/constants";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { Text } from "react-native";
import RootNavigator from "./navigation/root-navigation";

const config = {
  screens: {
    DrawerTabs: {
      screens: {
        HomeTabs: {
          screens: {
            Home: "home",
            Cart: "cart",
            Favorite: "favorite",
            Profile: "profile/:fullName?/:emailAddress?",
          },
        },
      },
    },
  },
};

const linking: LinkingOptions<RootStackParamListMain> = {
  prefixes: [Linking.createURL("/")],
  config,
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <RootNavigator />
    </NavigationContainer>
  );
}
