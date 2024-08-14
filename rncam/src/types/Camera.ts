import { CameraType } from 'expo-camera'

export interface CameraContainerProps {
  type: CameraType
  onFlipCamera: () => void
  unMountCamera: () => void
}
