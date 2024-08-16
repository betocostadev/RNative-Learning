import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CameraType, CameraView } from 'expo-camera'

import { CamViewProps } from './props'
import { styles } from './styles'

export default function CamView({
  cameraRef,
  isRecording,
  onRecording,
  onStopRecording,
}: CamViewProps) {
  const [facing, setFacing] = useState<CameraType>('back')

  const toggleCameraFacing = () =>
    setFacing((current) => (current === 'back' ? 'front' : 'back'))

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
            <Text style={styles.text}>Record Video</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}
