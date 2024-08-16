import { useEffect, useState, useRef } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

import {
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
  CameraRecordingOptions,
} from 'expo-camera'
import { shareAsync } from 'expo-sharing'
import * as MediaLibrary from 'expo-media-library'

import CamView from './src/components/CamView'
import VideoPlayer from './src/components/VideoPlayer'

export default function App() {
  const [permission, requestPermission] = useCameraPermissions()
  const [status, requestMicPermission] = useMicrophonePermissions()
  const [permissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions()

  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([])

  const [isRecording, setIsRecording] = useState(false)
  const [video, setVideo] = useState<any>()

  const cameraRef = useRef<CameraView>(null)

  const recordVideo = async () => {
    const options: CameraRecordingOptions = { maxDuration: 15 }
    if (cameraRef.current) {
      setIsRecording(true)
      try {
        const recordedVideo = await cameraRef.current.recordAsync(options)
        setVideo(recordedVideo)
      } catch (e: any) {
        console.error('Error recording: ', e.message)
        Alert.alert('Error recording: ', e.message)
      } finally {
        setIsRecording(false)
      }
    }
  }

  const stopRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      if (cameraRef.current) {
        cameraRef.current.stopRecording()
      }
    }
  }

  const shareVideo = () => {
    shareAsync(video.uri)
  }
  const deleteVideo = () => {
    setVideo(undefined)
  }

  const getAlbums = async () => {
    if (permissionResponse?.status !== 'granted') {
      await requestPermission()
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    })
    setAlbums(fetchedAlbums)
  }

  const saveVideo = async () => {
    await requestPermission()
    await getAlbums()
    if (permissionResponse?.status !== 'granted') {
      alert('Permission to access gallery is required!')
      return
    }

    try {
      const album = albums.find((a) => a.title === 'RnVid')
      const asset = await MediaLibrary.createAssetAsync(video.uri)

      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync(asset, album, false)
      } else {
        await MediaLibrary.createAlbumAsync('RnVid', asset, false)
      }
      Alert.alert('Video saved to gallery!')
      deleteVideo()
    } catch (error) {
      console.log(error)
      Alert.alert('Error: Failed to save video to gallery.')
    }
  }

  useEffect(() => {
    ;(async () => {
      await requestPermission()
      await requestMicPermission()
      await requestMediaPermission()
    })()
  }, [])

  if (!permission?.granted || !status?.granted) {
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
