import { Button, StyleSheet, Text, View } from 'react-native'

import CamView from './src/components/CamView'
import VideoPlayer from './src/components/VideoPlayer'
import { useVideoViewModel } from './src/components/VideoPlayer/VideoViewModel'

export default function App() {
  const {
    requestCameraPermission,
    cameraPermission,
    requestMicPermission,
    micPermission,
    requestMediaPermission,
    mediaPermission,
    isRecording,
    cameraRef,
    video,
    discardVideo,
    recordVideo,
    saveVideo,
    stopRecording,
    shareVideo,
  } = useVideoViewModel()

  const allPermissionsGranted =
    cameraPermission?.granted &&
    micPermission?.granted &&
    mediaPermission?.granted

  if (!allPermissionsGranted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={requestCameraPermission}
          title="Grant Camera permission"
        />
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
        onDelete={discardVideo}
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
