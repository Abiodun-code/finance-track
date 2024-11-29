import { Onboarding, SignIn, SignUp } from "@/screens/not-authenticated";
import { NOT_AUTHENTICATED_PATH } from "@/types/index";

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
    name: NOT_AUTHENTICATED_PATH.SignUp,
    screen: SignUp,
  }
]