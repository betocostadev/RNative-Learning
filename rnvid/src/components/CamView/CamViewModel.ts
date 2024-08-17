import { useState } from 'react'
import { Linking } from 'react-native'
import { CameraMode, CameraType } from 'expo-camera'

export const useCamViewModel = () => {
  const [facing, setFacing] = useState<CameraType>('back')
  const [mode, setMode] = useState<CameraMode>('video')

  const toggleCameraMode = () =>
    mode === 'picture' ? setMode('video') : setMode('picture')

  const toggleCameraFacing = () =>
    setFacing((current) => (current === 'back' ? 'front' : 'back'))

  const openGallery = () => Linking.openURL('photos-redirect://')

  return {
    facing,
    mode,
    toggleCameraFacing,
    toggleCameraMode,
    openGallery,
  }
}
