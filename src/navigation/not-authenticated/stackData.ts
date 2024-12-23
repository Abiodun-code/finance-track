import { Onboarding, SignIn } from "@/screens/not-authenticated";
import { NOT_AUTHENTICATED_PATH } from "@/types/index";
import SignUpStack from "./sign-up-stack";
import ForgetPasswordStack from "./forget-password-stack";

export const NOT_AUTHENTICATED_STACK = [
  {
    id: 0,
    name: NOT_AUTHENTICATED_PATH.Onboarding,
    screen: Onboarding,
  },
  {
    id: 1,
    name: NOT_AUTHENTICATED_PATH.SignIn,
    screen: SignIn,
  },
  {
    id: 2,
    name: NOT_AUTHENTICATED_PATH.SignUpStack,
    screen: SignUpStack,
  },
  {
    id: 3,
    name: NOT_AUTHENTICATED_PATH.ForgetPasswordStack,
    screen: ForgetPasswordStack,
  }
]