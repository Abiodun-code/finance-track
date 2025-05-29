import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import { Text } from 'react-native-paper'; // Adjust if you're using a different Text component
import { useNavigation } from '@react-navigation/native';
import { hp } from '@/utils/responsiveHelper';

interface Props {
  children: React.ReactNode;
  font?: any;
  variant?: any;
  color?: any;
  showIcon?: boolean;
  showCloseIcon?: boolean;
  onClosePress?: () => void;
  textA?: any;
  textT?: any;
  iconBg?: string;
  iconSize?: number;
  iconP?: number;
  iconR?: number;
  iconColor?: string;
  width?: number | any;
}

const Title = ({
  children,
  font,
  variant,
  color,
  showIcon = false,
  showCloseIcon = false,
  onClosePress,
  textA,
  textT,
  iconSize,
  iconBg,
  iconP,
  iconR,
  iconColor,
  width,
}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width:width}}>
      {/* Left-side back icon */}
      {showIcon && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: iconBg,
            padding: iconP,
            borderRadius: iconR,
          }}
        >
          <Entypo name="chevron-thin-left" size={iconSize || hp(2.7)} color={iconColor || 'black'} />
        </TouchableOpacity>
      )}

      {/* Title Text */}
      <Text
        variant={variant}
        style={{
          fontFamily: font,
          color,
          textAlign: textA || 'center',
          flex: 1,
          textTransform: textT,
        }}
      >
        {children}
      </Text>

      {/* Right-side close icon */}
      {showCloseIcon && (
        <TouchableOpacity
          onPress={onClosePress || (() => navigation.goBack())}
          style={{
            backgroundColor: iconBg,
            padding: iconP,
            borderRadius: iconR,
          }}
        >
          <AntDesign name="close" size={iconSize || hp(3)} color={iconColor || 'black'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Title;
