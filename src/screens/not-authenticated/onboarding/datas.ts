import { Colors } from "@/constants/Colors";
import { NOT_AUTHENTICATED_PATH } from "@/types/not-authenticated";
import { AntDesign } from "@expo/vector-icons";

export const SOCIAL_HANDLER = [
  {
    id: 0,
    title: 'Sign in',
    path: NOT_AUTHENTICATED_PATH.SignIn,
    bg: Colors.tintColor
  },
  {
    id: 1,
    title: 'Sign up',
    path: NOT_AUTHENTICATED_PATH.SignUp,
    bg: Colors.grey,
  }
]