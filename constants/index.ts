import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  GetStarted: undefined;
  Verify: undefined;
  Category: undefined;
  Location: undefined;
  Notification: undefined;
};

export type Nav = NativeStackNavigationProp<RootStackParamList>;
