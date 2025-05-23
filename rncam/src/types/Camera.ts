import { CameraType } from 'expo-camera'

export interface CameraContainerProps {
  type: CameraType
  onFlipCamera: () => void
  unMountCamera: () => void
}

export interface ModalPictureProps {
  isOpen: boolean
  captureUri: string
  deletePicture: () => void
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export enum FlashModeTypes {
  auto = 'auto',
  on = 'on',
  off = 'off',
}

// Better to use as const
// const FlashModeTypes = {
//   auto: 'auto',
//   on: 'on',
//   off: 'off',
// } as const
