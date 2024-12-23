import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NOT_AUTHENTICATED_PARAM, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'
import { ChangePassword, ForgetOtp, ForgetPassword } from '@/screens/not-authenticated'

const { Navigator, Screen } = createNativeStackNavigator<NOT_AUTHENTICATED_PARAM>()

const ForgetPasswordStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={NOT_AUTHENTICATED_PATH.ForgetEmail}>
      <Screen name={NOT_AUTHENTICATED_PATH.ForgetEmail} component={ForgetPassword} />
      <Screen name={NOT_AUTHENTICATED_PATH.ForgetOtp} component={ForgetOtp} />
      <Screen name={NOT_AUTHENTICATED_PATH.ChangePassword} component={ChangePassword} />
    </Navigator>
  )
}

export default ForgetPasswordStack