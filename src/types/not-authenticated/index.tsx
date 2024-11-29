import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NOT_AUTHENTICATED_PARAM = {
  Onboarding: any,
  SignIn: any,
  SignUp: any,
}

export enum NOT_AUTHENTICATED_PATH {
  Onboarding = "Onboarding",
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export interface NOT_AUTH_PROP {
  navigation: NativeStackNavigationProp<NOT_AUTHENTICATED_PARAM>;
};