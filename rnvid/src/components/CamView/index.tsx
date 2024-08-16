import { useState } from 'react'
import { Linking, TouchableOpacity, View } from 'react-native'
import { CameraMode, CameraType, CameraView } from 'expo-camera'
import Ionicons from '@expo/vector-icons/Ionicons'

import { CamViewProps } from './props'
import { styles } from './styles'

export default function CamView({
  cameraRef,
  isRecording,
  onRecording,
  onStopRecording,
}: CamViewProps) {
  const [facing, setFacing] = useState<CameraType>('back')
  const [mode, setMode] = useState<CameraMode>('video')

  const toggleCameraMode = () =>
    mode === 'picture' ? setMode('video') : setMode('picture')

  const toggleCameraFacing = () =>
    setFacing((current) => (current === 'back' ? 'front' : 'back'))

  const openGallery = () => Linking.openURL('photos-redirect://')

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        mode={mode}
        ref={cameraRef}
      >
        <View style={styles.menuContainer}>
          <View style={styles.menuContainerRight}>
            <TouchableOpacity onPress={toggleCameraMode}>
              <Ionicons
                name={
                  mode === 'picture' ? 'videocam-outline' : 'camera-outline'
                }
                size={32}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraFacing}>
              <Ionicons name="camera-reverse-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery}>
              <Ionicons name="albums-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={
              isRecording
                ? [styles.buttonRecord, styles.buttonRecordStop]
                : styles.buttonRecord
            }
            onPress={isRecording ? onStopRecording : onRecording}
          />
        </View>
      </CameraView>
    </View>
  )
}
