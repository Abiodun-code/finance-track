import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { Button, Container, CustomInput, Title } from "@/shared/index";
import { hp } from "@/utils/responsiveHelper";
import { Colors } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from "@/types/not-authenticated";
import { forgetEmail } from "@/services/store/not-authenticated/forget-password/forgetThunk";

const ForgetPassword = ({ navigation }: NOT_AUTH_PROP) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { isLoading, error } = useSelector(
    (state: RootState) => state.forgetPassword
  );

  const handleEmail = async () => {
    if (!email) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    await dispatch<any>(forgetEmail({ email}));
    navigation.navigate(NOT_AUTHENTICATED_PATH.ForgetOtp, {email: email});
  };

  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          <Title
            color={Colors.white}
            textA="center"
            textT="capitalize"
            variant="displaySmall"
          >
            Change Password
          </Title>
        </View>

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

          <Button
            bg={Colors.blue}
            p={hp(1.7)}
            borderR={hp(2)}
            press={handleEmail}
            disabled={isLoading}
          >
            <Title textT="capitalize" color={Colors.white} font="i500">
              {isLoading ? "Verify Otp..." : "Verify Otp"}
            </Title>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ForgetPassword;
