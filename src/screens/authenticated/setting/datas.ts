import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export const PROF_LIST = (handleLogout: () => void) => [
  {
    id: 0,
    name: "Edit Profile",
    iconName: "car",
    iconHome: FontAwesome,
    bg: Colors.blue,
    onPress: () => console.log("Edit Profile pressed"),
  },
  {
    id: 1,
    name: "Settings",
    iconName: "key",
    iconHome: FontAwesome,
    bg: Colors.lightPrimary,
    onPress: () => console.log("Settings pressed"),
  },
  {
    id: 2,
    name: "Privacy Policy",
    iconName: "question-circle",
    iconHome: FontAwesome,
    bg: Colors.gray,
    onPress: () => console.log("Privacy Policy pressed"),
  },
  {
    id: 3,
    name: "Logout",
    iconName: "question-circle",
    iconHome: FontAwesome,
    bg: Colors.red,
    onPress: handleLogout,
  },
];
