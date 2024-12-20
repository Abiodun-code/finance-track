import { View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Container, CustomInput, Title } from '@/shared/index';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/services/store/store';
import { createUser } from '@/services/store/not-authenticated/createAccountThunk';

const SignUp = ({ navigation }: NOT_AUTH_PROP) => {
  const dispatch = useDispatch();

  const [userText, setUserText] = useState({
    email: "",
    password: "",
  });

  const { isLoading } = useSelector((state: RootState) => state.createAccount);

  const handleSign = async () => {
    if (!userText.email || !userText.password) {
      return Alert.alert("Error", "All fields are required.", [{ text: "OK" }]);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userText.email)) {
      return Alert.alert("Error", "Invalid email format.", [{ text: "OK" }]);
    }

    if (userText.password.length < 6) {
      return Alert.alert("Error", "Password must be at least 6 characters long.", [{ text: "OK" }]);
    }

    try {
      const response = await dispatch<any>(
        createUser({ email: userText.email, password: userText.password })
      ).unwrap();
      console.log("User created successfully:", response);
      navigation.navigate(NOT_AUTHENTICATED_PATH.FirstName);
    } catch (err: any) {
      console.error("Signup error:", err);

      // Extract error message from the backend response
      const errorMessage =
        err.response?.data?.message || // Backend error message
        (typeof err === "string" ? err : "An unexpected error occurred. Please try again.");

      Alert.alert("Signup Error", errorMessage, [{ text: "OK" }]);
    }

  };

  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          <Title color={Colors.white} iconBg={Colors.gray} iconColor={Colors.white} iconR={hp(1.3)} iconP={hp(1.5)} showIcon={true}></Title>
          <View style={{ paddingTop: hp(3), rowGap: hp(2) }}>
            <Title color={Colors.white} textA="left" textT="capitalize" variant="displaySmall">
              Welcome
            </Title>
            <Title color={Colors.white} textA="left" textT="capitalize" variant="titleMedium" font="i300">
              Sign up now to track all your expenses with Finance Track
            </Title>
          </View>
        </View>

        {/* Input Fields */}
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput
            label="Email"
            value={userText.email}
            onChangeText={(val) => setUserText((prev) => ({ ...prev, email: val.trim() }))}
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <CustomInput
            label="Password"
            value={userText.password}
            onChangeText={(val) => setUserText((prev) => ({ ...prev, password: val.trim() }))}
            secureTextEntry
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
            returnKeyType="done"
          />
          {/* Submit Button */}
          <Button bg={Colors.blue} p={hp(1.7)} borderR={hp(2)} press={handleSign} disabled={isLoading}>
            <Title textT="capitalize" color={Colors.white} font="i500">
              {isLoading ? "Signing up..." : "Sign up"}
            </Title>
          </Button>

          {/* Footer */}
          <View style={{ paddingTop: hp(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: hp(1) }}>
            <Text variant="titleSmall" style={{ color: Colors.white, fontFamily: 'i500' }}>Already have an account?</Text>
            <Button press={() => navigation.navigate(NOT_AUTHENTICATED_PATH.SignIn)}>
              <Text variant="titleSmall" style={{ color: Colors.blue, fontFamily: 'i700' }}>Sign In</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUp;
