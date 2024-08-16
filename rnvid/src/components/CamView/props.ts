import { CameraView, CameraViewRef } from 'expo-camera'

export interface CamViewProps {
  cameraRef: React.RefObject<CameraViewRef>
  isRecording: boolean
  onRecording: () => void
  onStopRecording: () => void
}
