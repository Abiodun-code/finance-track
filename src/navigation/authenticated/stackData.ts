import { Home, Setting, Statistic, Wallet } from "@/screens/authenticated";
import { AUTHENTICATED_PATH } from "@/types/authenticated";

export const NAVIGATION_DATA = [
  {
    id: 0,
    name: AUTHENTICATED_PATH.Home,
    screen: Home
  },
  {
    id: 1,
    name: AUTHENTICATED_PATH.Statistic,
    screen: Statistic
  },
  {
    id: 2,
    name: AUTHENTICATED_PATH.Wallet,
    screen: Wallet
  },
  {
    id: 3,
    name: AUTHENTICATED_PATH.Setting,
    screen: Setting
  }
]

export const AUTHENTICATED_STACK = [
  {
    id: 0,
    name: AUTHENTICATED_PATH.Home,
    screen: Home
  },
  {
    id: 1,
    name: AUTHENTICATED_PATH.Setting,
    screen: Setting
  }
]