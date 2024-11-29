import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AUTHENTICATED_PARAM = {
  Home: undefined,
  Setting: undefined,
  Navigation: undefined,
}

export enum AUTHENTICATED_PATH {
  Home = "Home",
  Setting = "Setting",
  Navigation = "Navigation",
}

export interface AUTH_PROP {
  navigation: NativeStackNavigationProp<AUTHENTICATED_PARAM>;
};