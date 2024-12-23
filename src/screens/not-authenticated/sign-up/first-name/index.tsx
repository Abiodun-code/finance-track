import { View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Container, CustomInput, Title } from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'
import { useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { updateFirstName } from '@/services/store/not-authenticated/sign-up/createAccountThunk'

const FirstName = ({ navigation, route }: NOT_AUTH_PROP) => {
  const dispatch = useDispatch();
  const { email, password } = route.params as { email: string, password: string }; // Get email from route params

  console.log("email: " + email + " password: " + password);
  
  const [firstName, setFirstName] = useState('');

  const handleFirst = async () => {
    if (!firstName.trim()) {
      return Alert.alert("Error", "All fields are required.", [{ text: "OK" }]); // Handle empty input, e.g., show an error message
    }

    try {
      await dispatch<any>(updateFirstName({ firstName, email })).unwrap();
      navigation.navigate(NOT_AUTHENTICATED_PATH.LastName, { email, password });
    } catch (error) {
      console.error('Error updating first name:', error); // Handle error, e.g., show a toast notification
    }
  };

  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          <Title color={Colors.white} iconBg={Colors.gray} iconColor={Colors.white} iconR={hp(1.3)} iconP={hp(1.5)} showIcon={true}>{""}</Title>
          <View style={{ paddingTop: hp(3), rowGap: hp(2) }}>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'displaySmall'}>First name</Title>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'titleMedium'} font={'i300'}>
              Sign up now to track all your expenses with Finance track
            </Title>
          </View>
        </View>
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput
            label="FirstName"
            value={firstName}
            onChangeText={setFirstName}
            bg={Colors.white}
            textColor={Colors.white}
            activeOutlineColor={Colors.white}
            bgColor={Colors.black}
          />
          <Button
            bg={Colors.blue}
            p={hp(1.7)}
            borderR={hp(2)}
            press={handleFirst}
          >
            <Title textT={'capitalize'} color={Colors.white} font={'i500'}>Next step</Title>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
};

export default FirstName;
