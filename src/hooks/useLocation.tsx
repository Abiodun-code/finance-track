import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [locationDetails, setLocationDetails] = useState<any>({});
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const getUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      if (coords) {
        const { latitude, longitude } = coords;
        setLatitude(latitude);
        setLongitude(longitude);

        const response = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (response.length > 0) {
          const location = response[0];
          setLocationDetails({
            street: location.street || '',
            city: location.city || '',
            region: location.region || '',
            postalCode: location.postalCode || '',
            country: location.country || '',
            streetNumber: location.streetNumber || '',
            subRegion: location.subregion || '',
            formattedAddress: `${location.street || ''}, ${location.city || ''}, ${location.country || ''}`,
          });
        }
      }
    } catch (error) {
      console.error('Error getting location:', error);
      setErrorMsg('An error occurred while fetching location.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { latitude, longitude, locationDetails, errorMsg, loading };
};

export default useLocation;
