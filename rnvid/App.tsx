import { useEffect, useState, useRef } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import {
  CameraType,
  CameraView,
  CameraViewRef,
  useCameraPermissions,
  useMicrophonePermissions,
} from 'expo-camera'
import { Video } from 'expo-av'
import { shareAsync } from 'expo-sharing'
import * as MediaLibrary from 'expo-media-library'

import CamView from './src/components/CamView'
import VideoPlayer from './src/components/VideoPlayer'

export default function App() {
  const [permission, requestPermission] = useCameraPermissions()
  const [status, requestMicPermission] = useMicrophonePermissions()
  const [permissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions()

  const [isRecording, setIsRecording] = useState(false)

  const cameraRef = useRef<CameraViewRef>(null)

  const recordVideo = () => null

  const stopRecording = () => null

  useEffect(() => {
    ;(async () => {
      await requestPermission()
      await requestMicPermission()
      await requestMediaPermission()
    })()
  }, [])

  if (!permission?.granted || !status?.granted) {
    // Permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Camera permission" />
        <Text style={styles.message}>
          We need your permission to use the microphone for recording videos
        </Text>
        <Button
          onPress={requestMicPermission}
          title="Grant Microphone permission"
        />
        <Text style={styles.message}>
          We need your permission to open your media library to save your
          recordings
        </Text>
        <Button
          onPress={requestMediaPermission}
          title="Grant Media Library permission"
        />
      </View>
    )
  }

  return (
    <CamView
      cameraRef={cameraRef}
      isRecording={isRecording}
      onRecording={recordVideo}
      onStopRecording={stopRecording}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
})
