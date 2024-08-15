import { Alert, Image, Modal, TouchableOpacity, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { ModalPictureProps } from '../../types/Camera'
import { styles } from './styles'
import { useEffect, useState } from 'react'

export default function PictureModal({
  isOpen,
  captureUri,
  deletePicture,
  setIsOpen,
}: ModalPictureProps) {
  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([])
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

  const saveImage = async () => {
    await requestPermission()
    if (permissionResponse?.status !== 'granted') {
      alert('Permission to access gallery is required!')
      return
    }

    try {
      const album = albums.find((a) => a.title === 'RnCam')
      const asset = await MediaLibrary.createAssetAsync(captureUri)

      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync(asset, album, false)
      } else {
        await MediaLibrary.createAlbumAsync('RnCam', asset, false)
      }
      Alert.alert('Photo saved to gallery!')
      setIsOpen(false)
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo to gallery.')
    }
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

  useEffect(() => {
    ;(async () => {
      await getAlbums()
    })()
  }, [])

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
              <MaterialCommunityIcons name="delete" size={36} color="#be4b4b" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalActionBtn} onPress={saveImage}>
              <MaterialCommunityIcons
                name="content-save"
                size={36}
                color="#3a8a2c"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
