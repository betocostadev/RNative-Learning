import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CameraView, FlashMode } from 'expo-camera'
import { CameraContainerProps } from '../../types/Camera'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

export default function CameraContainer({
  type,
  onFlipCamera,
  unMountCamera,
}: CameraContainerProps) {
  const [zoom, setZoom] = useState(0)
  const [flash, setFlash] = useState<FlashMode>('auto')

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

  const renderCameraScreen = () => {
    return (
      <CameraView style={styles.camera} facing={type} zoom={zoom} flash={flash}>
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
    )
  }

  const renderBottomMenu = () => {
    return (
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.button} onPress={onFlipCamera}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={32}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={unMountCamera}>
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
    )
  }

  return (
    <View style={styles.container}>
      {renderCameraScreen()}
      {renderBottomMenu()}
    </View>
  )
}
