import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { Button, Container, CustomInput, Title } from "@/shared/index";
import { hp } from "@/utils/responsiveHelper";
import { Colors } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { changePassword } from "@/services/store/not-authenticated/forget-password/forgetThunk";
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from "@/types/not-authenticated";
const ChangePassword = ({ navigation, route }: NOT_AUTH_PROP) => {

  const dispatch = useDispatch();

  const { email } = route.params as { email: string };
  console.log("email", email);
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoading, error } = useSelector(
    (state: RootState) => state.forgetPassword
  );

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    await dispatch<any>(changePassword({ newPassword, confirmPassword, email }));
    Alert.alert("Success", "Password changed successfully.");
    navigation.navigate(NOT_AUTHENTICATED_PATH.SignIn);
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
            label="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
          />
          <CustomInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
          />

          <Button
            bg={Colors.blue}
            p={hp(1.7)}
            borderR={hp(2)}
            press={handleChangePassword}
            disabled={isLoading}
          >
            <Title textT="capitalize" color={Colors.white} font="i500">
              {isLoading ? "Changing Password..." : "Change Password"}
            </Title>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ChangePassword