import { View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { Button, Title } from '@/shared/index'
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { hp } from '@/utils/responsiveHelper';
import useCurrentUser from '@/hooks/useCurrentUser';

const UserHeader = () => {
  const { user } = useCurrentUser();
  console.log(user?.user);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: hp(2) }}>
      <View>
        <Title textA={'left'} textT={'capitalize'} font={'i400'} color={Colors.white}>Hello,</Title>
        <Text variant='titleMedium' style={{ color: Colors.white, fontFamily: 'i500', textTransform: "capitalize" }}>
          {user?.user.firstName}
        </Text>
      </View>
      <Button p={hp(2)} bg={Colors.gray} borderR={hp(5)} >
        <Feather name="search" size={hp(2)} color={Colors.white} />
      </Button>
    </View>
  )
}

export default UserHeader