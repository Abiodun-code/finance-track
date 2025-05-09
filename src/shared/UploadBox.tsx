import React, { useState } from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '@/constants/Colors';
import { hp } from '@/utils/responsiveHelper';
import { carImage } from '@/assets/index';
import {Title} from '@/shared/index'
import { Text } from 'react-native-paper';

interface UploadBoxProps {
  onPick: (uri: string) => void;
  initialImage?: string;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onPick, initialImage }) => {
  const [imageUri, setImageUri] = useState(initialImage || null);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'livePhotos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      onPick(uri);
    }
  };

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity onPress={handlePickImage} style={styles.uploadBox}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', rowGap: hp(1) }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={carImage} />
            </View>
            <Title font={'i600'} variant={'titleMedium'}>Upload images</Title>
            <Text variant='titleMedium' style={{ fontFamily: 'i500', color:Colors.lighterGray }}>Click here to add images of your car</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UploadBox;

const styles = StyleSheet.create({
  uploadBox: {
    height: hp(23),
    width: '90%',
    borderColor: Colors.softGray,
    borderRadius: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.neutralGray,
    marginTop: hp(3),
  },
  uploadText: {
    color: Colors.gray,
    fontFamily: 'i500',
    fontSize: hp(1.8),
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: hp(1),
    resizeMode: 'cover',
  },
});
