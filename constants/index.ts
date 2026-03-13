import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  HomeTabs: undefined;
  DrawerTabs: undefined;
  Intro: undefined;
  GetStarted: undefined;
  Verify: undefined;
  Category: undefined;
  Location: undefined;
  Notification: undefined;
};

export type Nav = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamListMain = {
  DrawerTabs: NavigatorScreenParams<DrawerParamList>;
};

type DrawerParamList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamList>;
};

export type HomeTabsParamList = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: { fullName?: string; emailAddress?: string };
};
