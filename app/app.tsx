import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/root-navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
