import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AUTHENTICATED_PARAM = {
  Home: undefined,
}

export enum AUTHENTICATED_PATH {
  Home = "Home",
}

export interface AUTH_PROP {
  navigation: NativeStackNavigationProp<AUTHENTICATED_PARAM>;
};