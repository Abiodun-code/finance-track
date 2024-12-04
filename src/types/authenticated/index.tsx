import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AUTHENTICATED_PARAM = {
  Home: undefined,
  Setting: undefined,
  Navigation: undefined,
  Wallet: undefined,
  Statistic: undefined,
}

export enum AUTHENTICATED_PATH {
  Home = "Home",
  Setting = "Setting",
  Navigation = "Navigation",
  Wallet = "Wallet",
  Statistic = "Statistic"
}

export interface AUTH_PROP {
  navigation: NativeStackNavigationProp<AUTHENTICATED_PARAM>;
};