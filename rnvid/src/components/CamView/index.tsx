import { useMemo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CameraView } from 'expo-camera'
import Ionicons from '@expo/vector-icons/Ionicons'

import { CamViewProps } from './props'
import { styles } from './styles'
import { useCamViewModel } from './CamViewModel'
import { MAX_VIDEO_RECORD_DURATION } from '../../utils/constants'

export default function CamView({
  cameraRef,
  isRecording,
  onRecording,
  onStopRecording,
  elapsedTime,
}: CamViewProps) {
  const { facing, mode, toggleCameraFacing, toggleCameraMode, openGallery } =
    useCamViewModel()

  const getCamModeIcon = useMemo(() => {
    return mode === 'picture' ? 'videocam-outline' : 'camera-outline'
  }, [mode])

  const getCamRecordingButtonStyle = useMemo(() => {
    return isRecording
      ? [styles.buttonRecord, styles.buttonRecordStop]
      : styles.buttonRecord
  }, [isRecording])

  const getTimeElapsedText = () => {
    return `0:${
      elapsedTime !== 0 && elapsedTime < 10 ? `0${elapsedTime}` : elapsedTime
    }${elapsedTime === 0 ? '0' : ''} / 0:${MAX_VIDEO_RECORD_DURATION}`
  }

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
              <Ionicons name={getCamModeIcon} size={32} color="white" />
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
          {mode === 'video' ? (
            <Text style={styles.elapsedTime}>{getTimeElapsedText()}</Text>
          ) : null}
          <TouchableOpacity
            style={getCamRecordingButtonStyle}
            onPress={isRecording ? onStopRecording : onRecording}
          />
        </View>
      </CameraView>
    </View>
  )
}
