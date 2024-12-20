export interface UserData {
  userData: {
    deactivated: boolean,
    email: string,
    firstName: string,
    phoneNumber: string,
    photo?: string,
    surname: string,
    userId: string
  },
}

export interface LoginData {
  message: string,
  userData: UserData
}