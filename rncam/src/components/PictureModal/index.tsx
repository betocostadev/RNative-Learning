import { Alert, Image, Modal, TouchableOpacity, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ModalPictureProps } from '../../types/Camera'
import { styles } from './styles'

export default function PictureModal({
  isOpen,
  captureUri,
  deletePicture,
  setIsOpen,
}: ModalPictureProps) {
  const saveImage = async () => {
    const permissionResult = await MediaLibrary.requestPermissionsAsync()
    if (permissionResult.granted === false) {
      alert('Permission to access gallery is required!')
      return
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(captureUri)
      await MediaLibrary.createAlbumAsync('MyAppPhotos', asset, false)
      Alert.alert('Photo saved to gallery!')
      setIsOpen(false)
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo to gallery.')
    }
  }

  return (
    <Modal animationType="slide" transparent={false} visible={isOpen}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => setIsOpen(false)}
        >
          <MaterialCommunityIcons name="close" size={44} color="#000000" />
        </TouchableOpacity>
        <Image style={styles.modalImage} source={{ uri: captureUri }} />
        <View style={styles.modalFooter}>
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity onPress={deletePicture}>
              <MaterialCommunityIcons name="delete" size={44} color="#ff7171" />
            </TouchableOpacity>
            <TouchableOpacity onPress={saveImage}>
              <MaterialCommunityIcons
                name="content-save"
                size={44}
                color="#3a912b"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
