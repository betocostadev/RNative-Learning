// VideoViewModel.ts
import { useState, useRef, useEffect } from 'react'
import { Alert } from 'react-native'
import {
  CameraRecordingOptions,
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { shareAsync } from 'expo-sharing'
import { MAX_VIDEO_RECORD_DURATION } from '../../utils/constants'

export const useVideoViewModel = () => {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions()
  const [micPermission, requestMicPermission] = useMicrophonePermissions()
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions()

  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [video, setVideo] = useState<{ uri: string } | undefined>(undefined)
  const cameraRef = useRef<CameraView>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    ;(async () => {
      await requestCameraPermission()
      await requestMicPermission()
      await requestMediaPermission()
    })()
  }, [])

  const recordVideo = async () => {
    const options: CameraRecordingOptions = {
      maxDuration: MAX_VIDEO_RECORD_DURATION,
    }
    if (cameraRef.current) {
      setIsRecording(true)
      setElapsedTime(0)
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
      try {
        const recordedVideo = await cameraRef.current.recordAsync(options)
        setVideo(recordedVideo)
      } catch (e: any) {
        console.error('Error recording: ', e.message)
        Alert.alert('Error recording: ', e.message)
      } finally {
        setIsRecording(false)
        if (timerRef.current) {
          clearInterval(timerRef.current)
          timerRef.current = null
        }
      }
    }
  }

  const stopRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      setElapsedTime(0)
      if (cameraRef.current) {
        cameraRef.current.stopRecording()
      }
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const shareVideo = () => {
    if (video?.uri) {
      shareAsync(video.uri)
    } else {
      Alert.alert('No video to share')
    }
  }

  const discardVideo = () => {
    setVideo(undefined)
  }

  const getAlbums = async () => {
    if (mediaPermission?.status !== 'granted') {
      await requestMediaPermission()
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    })
    setAlbums(fetchedAlbums)
  }

  const saveVideo = async () => {
    if (!video) {
      alert('Video not recorded')
      return
    }
    await requestMediaPermission()
    await getAlbums()
    if (mediaPermission?.status !== 'granted') {
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
      discardVideo()
    } catch (error) {
      console.log(error)
      Alert.alert('Error: Failed to save video to gallery.')
    }
  }

  return {
    requestCameraPermission,
    cameraPermission,
    requestMicPermission,
    micPermission,
    requestMediaPermission,
    mediaPermission,
    isRecording,
    video,
    elapsedTime,
    cameraRef,
    discardVideo,
    recordVideo,
    saveVideo,
    stopRecording,
    shareVideo,
  }
}
