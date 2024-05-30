import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CamaraPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const devices = useCameraDevices();
  const device = devices.front;
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      console.log('Camera permission:', permission);
      setHasPermission(permission === 'authorized');
    };
    requestPermission();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('Screen is focused');
      setIsActive(true);

      return () => {
        console.log('Screen is unfocused');
        setIsActive(false);
      };
    }, [])
  );

  if (hasPermission === null) return <Text>Loading...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;
  if (device == null) return <Text>No camera device found</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
      />
      <Button
        title="Salir"
        onPress={() => setIsActive(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'black'
  },
});

export default CamaraPage;
