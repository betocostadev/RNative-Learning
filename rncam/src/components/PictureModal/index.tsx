import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ModalPictureProps } from '../../types/Camera'
import { styles } from './styles'

export default function PictureModal({
  isOpen,
  captureUri,
  deletePicture,
}: ModalPictureProps) {
  return (
    <Modal animationType="slide" transparent={false} visible={isOpen}>
      <View style={styles.modalContainer}>
        <Image style={styles.modalImage} source={{ uri: captureUri }} />
        <View style={styles.modalFooter}>
          <Text style={styles.modalFooterText}>Photo taken!</Text>
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity onPress={deletePicture}>
              <MaterialCommunityIcons name="delete" size={44} color="#ff7171" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('save!')}>
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
