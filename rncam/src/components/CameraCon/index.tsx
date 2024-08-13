import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function CameraCon() {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false)

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

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  function stopCamera() {
    setIsCameraActive(false)
  }

  function startCamera() {
    setIsCameraActive(true)
  }

  const CameraScreen = () => {
    return isCameraActive ? (
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}></View>
      </CameraView>
    ) : (
      <View style={styles.noCameraSection}>
        <Text style={styles.noCameraText}>
          Activate your device camera below
        </Text>
      </View>
    )
  }

  const BottomMenu = () => {
    return isCameraActive ? (
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={32}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopCamera}>
          <MaterialCommunityIcons
            name="camera-off-outline"
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={[styles.bottomMenu, { backgroundColor: '#151515ad' }]}>
        <TouchableOpacity style={styles.button} onPress={startCamera}>
          <MaterialCommunityIcons name="camera" size={32} color="white" />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {CameraScreen()}
      {BottomMenu()}
    </View>
  )
}
