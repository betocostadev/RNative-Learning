import { useState, useRef } from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import { CameraView, FlashMode } from 'expo-camera'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { CameraContainerProps, FlashModeTypes } from '../../types/Camera'
import PictureModal from '../PictureModal'
import { styles } from './styles'

export default function CameraContainer({
  type,
  onFlipCamera,
  unMountCamera,
}: CameraContainerProps) {
  const [zoom, setZoom] = useState(0)
  const [flash, setFlash] = useState<FlashMode>(FlashModeTypes.auto)
  const [isCamReady, setIsCamReady] = useState<boolean>(false)
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const camRef = useRef<CameraView>(null)

  const openGallery = () => Linking.openURL('photos-redirect://')

  const changeZoomLevel = (operand: string) => {
    if (operand === '+') {
      setZoom((zoom) => zoom + 0.01)
    } else {
      setZoom((zoom) => zoom - 0.01)
    }
  }

  const getFlashIcon = () => {
    return flash === FlashModeTypes.auto
      ? 'flash-auto'
      : flash === FlashModeTypes.off
      ? 'flash-off'
      : 'flash'
  }

  const handleFlashControl = () => {
    switch (flash) {
      case FlashModeTypes.auto:
        setFlash(FlashModeTypes.on)
        break
      case FlashModeTypes.on:
        setFlash(FlashModeTypes.off)
        break
      default:
        setFlash(FlashModeTypes.auto)
        break
    }
  }

  const takePicture = async () => {
    if (isCamReady && camRef.current) {
      const data = await camRef.current.takePictureAsync()
      if (data) {
        setCapturedPhoto(data.uri)
        setIsModalOpen(true)
      }
    }
  }

  const deletePicture = () => {
    setCapturedPhoto(null)
    setIsModalOpen(false)
  }

  const renderCameraScreen = () => {
    return (
      <CameraView
        style={styles.camera}
        facing={type}
        zoom={zoom}
        flash={flash}
        onCameraReady={() => setIsCamReady(true)}
        ref={camRef}
      >
        <View style={styles.zoomContainer}>
          <Text style={styles.zoomText}>Zoom</Text>
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
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <MaterialCommunityIcons name="camera-image" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onFlipCamera}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={28}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <MaterialCommunityIcons
            name="camera-enhance-outline"
            size={32}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFlashControl}>
          <MaterialCommunityIcons
            name={getFlashIcon()}
            size={28}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={unMountCamera}>
          <MaterialCommunityIcons
            name="camera-off-outline"
            size={28}
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
      {capturedPhoto && isModalOpen ? (
        <PictureModal
          isOpen={isModalOpen}
          captureUri={capturedPhoto}
          deletePicture={deletePicture}
          setIsOpen={setIsModalOpen}
        />
      ) : null}
    </View>
  )
}
