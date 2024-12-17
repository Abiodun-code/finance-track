import { View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Container, CustomInput, Title } from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'

const VerifyOtp = ({ navigation }: NOT_AUTH_PROP) => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          <Title color={Colors.white} iconBg={Colors.gray} iconColor={Colors.white} iconR={hp(1.3)} iconP={hp(1.5)} showIcon={true}> </Title>
          <View style={{ paddingTop: hp(3), rowGap: hp(2) }}>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'displaySmall'}>Verification code</Title>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'titleMedium'} font={'i300'}>Sign up now to track all your expenses with Finance track</Title>
          </View>
        </View>
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput keyboardType='numeric' label='Verification code' bg={Colors.white} textColor={Colors.white} activeOutlineColor={Colors.white} bgColor={Colors.black} />

          <Button bg={Colors.blue} p={hp(1.7)} borderR={hp(2)} press={() => navigation.navigate(NOT_AUTHENTICATED_PATH.FirstName)}>
            <Title textT={'capitalize'} color={Colors.white} font={'i500'}>Sign up</Title>
          </Button>

          <Button mt={hp(2)} itemAlign='center' press={() => { navigation.navigate(NOT_AUTHENTICATED_PATH.SignIn) }}>
            <Text variant="titleSmall" style={{ color: Colors.blue, fontFamily: 'i500' }}>Resend verification code</Text>
          </Button>
        </View>
      </ScrollView>
    </Container>
  )
}

export default VerifyOtp