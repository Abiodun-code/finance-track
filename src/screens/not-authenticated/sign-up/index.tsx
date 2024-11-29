import { View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Container, CustomInput, Title } from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'

const SignUp = ({navigation}:NOT_AUTH_PROP) => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View>
          <Title color={Colors.white} iconBg={Colors.gray} iconColor={Colors.white} iconR={hp(1.3)} iconP={hp(1.5)} showIcon={true}> </Title>
          <View style={{ paddingTop: hp(3), rowGap: hp(2) }}>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'displaySmall'}>Welcome</Title>
            <Title color={Colors.white} textA={'left'} textT={'capitalize'} variant={'titleMedium'} font={'i300'}>Sign up now to track all your expenses with Finance track</Title>
          </View>
        </View>
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput label='Email' bg={Colors.white} textColor={Colors.white} activeOutlineColor={Colors.white} bgColor={Colors.black} />
          <CustomInput label='Password' bg={Colors.white} textColor={Colors.white} activeOutlineColor={Colors.white} bgColor={Colors.black} />
          {/* <Button mb={hp(5)}>
            <Title color={Colors.white} textA={'right'} textT={'capitalize'} variant={'titleSmall'} font={'i400'}>Forget Password?</Title>
          </Button> */}
          <Button bg={Colors.blue} p={hp(1.7)} borderR={hp(2)}>
            <Title textT={'capitalize'} color={Colors.white} font={'i500'}>Sign up</Title>
          </Button>
          <View style={{ paddingTop: hp(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: hp(1) }}>
            <Text variant="titleSmall" style={{ color: Colors.white, fontFamily: 'i500' }}>Already have an account?</Text>
            <Button press={() => { navigation.navigate(NOT_AUTHENTICATED_PATH.SignIn) }}>
              <Text variant="titleSmall" style={{ color: Colors.blue, fontFamily: 'i700' }}>Sign In</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}

export default SignUp