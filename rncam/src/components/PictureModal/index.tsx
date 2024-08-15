import { Alert, Image, Modal, TouchableOpacity, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ModalPictureProps } from '../../types/Camera'
import { styles } from './styles'
import { useState } from 'react'

export default function PictureModal({
  isOpen,
  captureUri,
  deletePicture,
  setIsOpen,
}: ModalPictureProps) {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

  const saveImage = async () => {
    await requestPermission()
    if (permissionResponse?.status !== 'granted') {
      alert('Permission to access gallery is required!')
      return
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(captureUri)
      await MediaLibrary.createAlbumAsync('RnCam', asset, false)
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
            <TouchableOpacity
              style={styles.modalActionBtn}
              onPress={deletePicture}
            >
              <MaterialCommunityIcons name="delete" size={38} color="#af3f3f" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalActionBtn} onPress={saveImage}>
              <MaterialCommunityIcons
                name="content-save"
                size={38}
                color="#2c741f"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
