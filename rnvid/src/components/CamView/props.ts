import { CameraView } from 'expo-camera'

export interface CamViewProps {
  cameraRef: React.RefObject<CameraView>
  isRecording: boolean
  onRecording: () => void
  onStopRecording: () => void
  elapsedTime: number
}
