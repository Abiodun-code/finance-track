import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTab = ({ state, descriptors, navigation }: Props) => {

  const icons = {
    Home: (props: any) => <AntDesign name='home' size={hp(3)} color={Colors.black} {...props} />,
    Setting: (props: any) => <AntDesign name='setting' size={hp(3)} color={Colors.black} {...props} />
  }

  return (
    <View
      style={{
        bottom: hp(0),
        backgroundColor: Colors.white,
        width: '100%',
        paddingVertical: hp(1),
        borderTopWidth: hp(.1),
        borderTopColor: Colors.gray,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
      }}
    >
      {state.routes.map((route: any | undefined, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems:'center'}}
          >
            {isFocused ? (
              <View >
                {icons[route.name]({
                  color: Colors.deepPrimary, // Change icon color when focused
                })}
              </View>
            ) : (
              icons[route.name]({
                color: Colors.black, // Default icon color when not focused
              })
            )}
            <Text style={{ color: isFocused ? Colors.deepPrimary : Colors.black, fontFamily: 'i400', fontSize: hp(1.5) }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTab