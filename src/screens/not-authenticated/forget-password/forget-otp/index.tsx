import { View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Container, CustomInput, Title } from '@/shared/index';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated';
import { useDispatch } from 'react-redux';
import { verifyOtp } from '@/services/store/not-authenticated/sign-up/createAccountThunk';
import { loginUser } from '@/services/store/not-authenticated/sign-in/loginSlice';
import { forgetOtp } from '@/services/store/not-authenticated/forget-password/forgetThunk';

const ForgetOtp = ({ navigation, route }: NOT_AUTH_PROP) => {

  const dispatch = useDispatch();

  const { email } = route.params as { email: string }; // Retrieve email and password
  console.log("email: " + email);

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    
    if (!otp.trim() || isNaN(Number(otp))) {
      return Alert.alert('Error', 'Please enter a valid OTP.', [{ text: 'OK' }]);
    }

    setLoading(true);
    try {
      // Verify OTP
      await dispatch<any>(forgetOtp({ otp: Number(otp), email })).unwrap();
      navigation.navigate(NOT_AUTHENTICATED_PATH.ChangePassword,{email: email})
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Something went wrong. Please try again.', [{ text: 'OK' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          <Title color={Colors.white} iconBg={Colors.gray} iconColor={Colors.white} iconR={hp(1.3)} iconP={hp(1.5)} showIcon={true}>
            {' '}
          </Title>
          <View style={{ paddingTop: hp(3), rowGap: hp(2) }}>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'displaySmall'}>
              Verification Code
            </Title>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'titleMedium'} font={'i300'}>
              Enter the code we sent to your email to complete signup.
            </Title>
          </View>
        </View>
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput
            keyboardType="numeric"
            label="Verification Code"
            value={otp}
            onChangeText={setOtp}
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
          />
          <Button bg={Colors.blue} p={hp(1.7)} borderR={hp(2)} press={handleVerify} disabled={loading}>
            <Title textT={'capitalize'} color={Colors.white} font={'i500'}>
              {loading ? 'Verifying...' : 'Verify'}
            </Title>
          </Button>
          <Button mt={hp(2)} itemAlign="center" press={() => navigation.navigate(NOT_AUTHENTICATED_PATH.SignIn)}>
            <Text variant="titleSmall" style={{ color: Colors.blue, fontFamily: 'i500' }}>
              Resend Verification Code
            </Text>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ForgetOtp;
