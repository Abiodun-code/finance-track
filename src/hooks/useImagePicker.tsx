import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

const useImagePicker = () => {
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasPermission(status === 'granted');

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant camera roll permissions to use this feature.');
    }

    return status === 'granted';
  };

  const pickImage = async () => {
    const permissionGranted = await requestPermission();
    if (!permissionGranted) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
        aspect: [4, 3]
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return {
    image,
    pickImage,
  };
};

export default useImagePicker;