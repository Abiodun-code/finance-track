import {Colors} from "@/constants/Colors"

export const getStatusColor = (status: string) => {
  switch (status.trim().toLowerCase()) {
    case 'expense':
      return { color: Colors.red }
    case 'income':
      return { color: Colors.green }
    default:
      return { color: Colors.black }
  }
}