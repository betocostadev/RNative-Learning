import React, {useState} from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'

export default function NoteEditor({getNotes}) {
  const [text, setText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const addNote = async () => {
    const newNote = {
      text,
    }
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}>
        <View style={styles.centerModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Add note</Text>
              <Text style={styles.modalSubTitle}>Note contents</Text>
              <TextInput
                style={styles.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={newText => setText(newText)}
                placeholder="Type your text here"
                value={text}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalBtnSave} onPress={addNote}>
                  <Text style={styles.modalBtnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalBtnCancel}
                  onPress={() => {
                    setModalVisible(false)
                  }}>
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisivel(true)
        }}
        style={styles.adicionarMemo}>
        <Text style={styles.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  centerModal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#FF9A94',
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EEEEEE',
    marginBottom: 12,
  },
  modalSubTitle: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtnSave: {
    backgroundColor: '#2ea805',
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: 'center',
  },
  modalBtnDelete: {
    backgroundColor: '#d62a18',
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: 'center',
  },
  modalBtnCancel: {
    backgroundColor: '#057fa8',
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: 'center',
  },
  modalBtnText: {
    color: '#FFFFFF',
  },
  addMemo: {
    backgroundColor: '#54ba32',
    justifyContent: 'center',
    height: 64,
    width: 64,
    margin: 16,
    alignItems: 'center',
    borderRadius: 9999,
    position: 'absolute',
    bottom: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  addMemoText: {
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFFFF',
  },
})
