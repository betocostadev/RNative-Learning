import { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { CameraType, useCameraPermissions } from 'expo-camera'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import CameraContainer from './src/components/CameraContainer'

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false)

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  function startCamera() {
    if (permission?.granted) {
      setIsCameraActive(true)
    }
  }

  function stopCamera() {
    setIsCameraActive(false)
  }

  const renderCameraContainer = () => {
    return isCameraActive ? (
      <CameraContainer
        type={facing}
        onFlipCamera={toggleCameraFacing}
        unMountCamera={stopCamera}
      />
    ) : (
      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={startCamera}>
          <MaterialCommunityIcons name="camera" size={32} color="white" />
        </TouchableOpacity>
      </View>
    )
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderCameraContainer()}
      {!isCameraActive && (
        <View style={styles.noCameraSection}>
          <Text style={styles.noCameraText}>
            Activate your device camera below
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  bottomMenu: {
    zIndex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#151515ad',
    width: '100%',
    height: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 4,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  noCameraSection: {
    flex: 1,
    paddingTop: 150,
    alignItems: 'center',
  },
  noCameraText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
