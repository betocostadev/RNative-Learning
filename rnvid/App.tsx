import { useEffect, useState, useRef } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

import {
  CameraType,
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
  CameraRecordingOptions,
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
  const [video, setVideo] = useState<any>()

  const cameraRef = useRef<CameraView>(null)

  const recordVideo = async () => {
    const options: CameraRecordingOptions = { maxDuration: 3 }
    if (cameraRef.current) {
      console.log('Recording started')
      setIsRecording(true)
      try {
        const recordedVideo = await cameraRef.current.recordAsync(options)
        console.log('Recorded video: ', recordedVideo)
        setVideo(recordedVideo)
      } catch (e: any) {
        console.error('Error recording: ', e.message)
        Alert.alert('Error recording: ', e.message)
      } finally {
        setIsRecording(false)
      }
    } else {
      Alert.alert('Camera reference is not set')
    }
  }

  const stopRecording = () => {
    if (isRecording) {
      console.log('Stop Recording called')
      setIsRecording(false)
      if (cameraRef.current) {
        cameraRef.current.stopRecording()
        console.log('Recording stopped')
      } else {
        console.log('Camera reference is not set')
      }
      console.log('Video after stopRecording:', video)
    } else {
      console.log('Not recording, cannot stop')
    }
  }

  const shareVideo = () => {}
  const saveVideo = () => {}
  const deleteVideo = () => {
    setVideo(undefined)
  }

  // Add a useEffect to log the video state whenever it changes
  useEffect(() => {
    console.log('Video state changed:', video)
  }, [video])

  useEffect(() => {
    ;(async () => {
      await requestPermission()
      await requestMicPermission()
      await requestMediaPermission()
    })()
  }, [])

  if (video) {
    return (
      <VideoPlayer
        video={video}
        onShare={shareVideo}
        onSave={saveVideo}
        onDelete={deleteVideo}
      />
    )
  }

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
