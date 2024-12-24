import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import { Button, Container, Title } from '@/shared/index'
import { hp, wp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { PROF_LIST } from './datas'
import { MaterialIcons } from '@expo/vector-icons'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/services/store/not-authenticated/sign-in/loginSlice'
import useImagePicker from '@/hooks/useImagePicker'
import useCurrentUser from '@/hooks/useCurrentUser'

const Setting = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch<any>(logoutUser());
  };

  const {user} = useCurrentUser();

  const { image, pickImage } = useImagePicker()


  const profileList = PROF_LIST(handleLogout);

  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: hp(2) }}>
        <Title variant={'titleLarge'} color={Colors.white}>Profile</Title>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View style={{ flex: 1, marginHorizontal: "auto", alignItems: 'center', justifyContent: 'center' }}>
          {image ? (
            <Button press={pickImage}>
              <View style={{ width: hp(10), height: hp(10), borderRadius: hp(7) }}>
                <Image
                  source={{ uri: image }}
                  style={{ width: hp(10), height: hp(10), resizeMode: 'cover', borderRadius: hp(7) }}
                />
              </View>
            </Button>
          ) : (
            <Button press={pickImage}>
              <View style={{ flex: 1, justifyContent: 'center', borderRadius: hp(7), backgroundColor: Colors.lightPrimary, padding: hp(5) }}>
                <Title color={Colors.black}>j</Title>
              </View>
            </Button>
          )}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title variant={'titleLarge'} textT={'capitalize'} color={Colors.white}>{user?.user.firstName} {user?.user.lastName}</Title>
            <Title font={'i400'} color={Colors.white}>{user?.user.email}</Title>
          </View>
        </View>
        <View style={{ paddingTop: hp(5) }}>
          {profileList.map((item, index) => (
            <Button press={item.onPress} mb={hp(2)} key={index} flexD='row' itemAlign='center' justContent='space-between'>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: hp(1) }}>
                <View style={{ backgroundColor: item.bg, padding: hp(2), borderRadius: hp(2) }}><item.iconHome size={hp(3)} color={Colors.white} name={item.iconName} /></View>
                <Text style={{ color: Colors.white, fontFamily: 'i500' }} variant='titleMedium'>{item.name}</Text>
              </View>
              <MaterialIcons name='arrow-forward-ios' color={Colors.white} size={hp(3)} />
            </Button>
          ))}
        </View>
      </ScrollView>
    </Container>
  )
}

export default Setting