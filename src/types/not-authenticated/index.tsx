import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NOT_AUTHENTICATED_PARAM = {
  Onboarding: any,
  SignIn: any,
  SignUp: any,
  FirstName: any,
  LastName: any,
  VerifyOtp: any,
  SignUpStack: any,
  ForgetPasswordStack: any,
  ForgetEmail: any,
  ForgetOtp: any,
  ChangePassword: any,
}

export enum NOT_AUTHENTICATED_PATH {
  Onboarding = "Onboarding",
  SignIn = "SignIn",
  SignUp = "SignUp",
  FirstName = "FirstName",
  LastName = "LastName",
  VerifyOtp = "VerifyOtp",
  SignUpStack = "SignUpStack",
  ForgetPasswordStack = "ForgetPasswordStack",
  ForgetEmail = "ForgetEmail",
  ForgetOtp = "ForgetOtp",
  ChangePassword = "ChangePassword",
}

export interface NOT_AUTH_PROP {
  navigation: NativeStackNavigationProp<NOT_AUTHENTICATED_PARAM>;
  route: RouteProp<ParamListBase>
};