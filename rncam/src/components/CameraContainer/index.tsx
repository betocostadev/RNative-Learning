import {
  CameraView,
  CameraType,
  useCameraPermissions,
  FlashMode,
} from 'expo-camera'
import { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function CameraContainer() {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false)
  const [zoom, setZoom] = useState(0)
  const [flash, setFlash] = useState<FlashMode>('auto')

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
    if (permission?.granted) {
      setIsCameraActive(true)
    }
  }

  function changeZoomLevel(operand: string) {
    if (operand === '+') {
      setZoom(0.02)
    } else {
      setZoom(0)
    }
  }

  function handleFlashControl() {
    switch (flash) {
      case 'auto':
        setFlash('on')
        break
      case 'on':
        setFlash('off')
        break
      default:
        setFlash('auto')
        break
    }
  }

  const CameraScreen = () => {
    return isCameraActive ? (
      <CameraView
        style={styles.camera}
        facing={facing}
        zoom={zoom}
        flash={flash}
      >
        <View style={styles.zoomContainer}>
          <Text style={styles.zoomText}>Zoom level</Text>
          <TouchableOpacity
            style={styles.zoomBtns}
            onPress={() => changeZoomLevel('+')}
            disabled={zoom >= 0.02}
          >
            <MaterialCommunityIcons name="plus" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zoomBtns}
            onPress={() => changeZoomLevel('-')}
            disabled={zoom <= 0}
          >
            <MaterialCommunityIcons name="minus" size={28} color="white" />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity style={styles.button} onPress={handleFlashControl}>
          <MaterialCommunityIcons
            name={
              flash === 'auto'
                ? 'flash-auto'
                : flash === 'off'
                ? 'flash-off'
                : 'flash'
            }
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
