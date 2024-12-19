import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Button, Container, CustomInput, Title } from '@/shared/index';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/services/store/store';
import { loginUser } from '@/services/store/not-authenticated/loginSlice';

const SignIn = ({ navigation }: NOT_AUTH_PROP) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error } = useSelector((state: RootState) => state.createAccount); // Select loading/error state

  const handleSignIn = async () => {
    const response = await dispatch<any>(loginUser({ email: email, password: password })); // Dispatch the thunk
    console.log('Login successful:', response);
  };

  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          {/* Titles */}
          <Title color={Colors.white} iconBg={Colors.gray} iconColor={Colors.white} iconR={hp(1.3)} iconP={hp(1.5)} showIcon={true} />
          <View style={{ paddingTop: hp(3), rowGap: hp(2) }}>
            <Title color={Colors.white} textA="left" textT="capitalize" variant="displaySmall">Welcome Back</Title>
            <Title color={Colors.white} textA="left" textT="capitalize" variant="titleMedium" font="i300">Sign in now to track all your expenses</Title>
          </View>
        </View>

        {/* Input Fields */}
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
          />
          <CustomInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
          />

          {/* Forget Password */}
          <Button mb={hp(5)}>
            <Title color={Colors.white} textA="right" textT="capitalize" variant="titleSmall" font="i400">Forget Password?</Title>
          </Button>

          {/* Sign In Button */}
          <Button
            bg={Colors.blue}
            p={hp(1.7)}
            borderR={hp(2)}
            press={handleSignIn}
            disabled={isLoading} // Disable button when loading
          >
            <Title textT="capitalize" color={Colors.white} font="i500">
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Title>
          </Button>

          {/* Sign Up Link */}
          <View style={{ paddingTop: hp(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: hp(1) }}>
            <Text variant="titleSmall" style={{ color: Colors.white, fontFamily: 'i500' }}>Don't have an account?</Text>
            <Button press={() => navigation.navigate(NOT_AUTHENTICATED_PATH.SignUp)}>
              <Text variant="titleSmall" style={{ color: Colors.blue, fontFamily: 'i700' }}>Sign Up</Text>
            </Button>
          </View>

          {/* Show error message */}
          {error && <Text style={{ color: 'red', marginTop: hp(2), textAlign: 'center' }}>{error}</Text>}
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignIn;
