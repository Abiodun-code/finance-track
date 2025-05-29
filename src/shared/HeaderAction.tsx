import React from 'react';
import { View } from 'react-native';
import { Bell, MessageSquare } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { hp } from '@/utils/responsiveHelper';
import { Button } from '@/shared/index';
import { AUTHENTICATED_PATH } from '@/types/Auth';

type Props = {
  navigation: any;
  showMessage?: boolean;
  showNotification?: boolean;
};

const HeaderActions = ({ navigation, showMessage = true, showNotification = true }: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: hp(2) }}>
      {showMessage && (
        <Button press={() => navigation.navigate(AUTHENTICATED_PATH.Message)}>
          <MessageSquare size={hp(3)} color={Colors.black} />
        </Button>
      )}
      {showNotification && (
        <Button press={() => navigation.navigate(AUTHENTICATED_PATH.Notification)}>
          <Bell size={hp(3)} color={Colors.black} />
        </Button>
      )}
    </View>
  );
};

export default HeaderActions;
