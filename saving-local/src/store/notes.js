import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

const getAllNotes = async () => {
  try {
    const storedKeys = await AsyncStorage.getAllKeys()
    const notes = await AsyncStorage.multiGet(storedKeys)
    return notes?.length
      ? notes.map(note => ({id: note[0], text: note[1]}))
      : []
  } catch (error) {
    console.log(error)
  }
}

const saveNote = async ({text}) => {
  const oneNote = {
    id: uuid.v4(),
    text,
  }
  try {
    await AsyncStorage.setItem(oneNote.id, oneNote.text)
    const response = await AsyncStorage.getItem(oneNote.id)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getNote = async () => {
  try {
    // console.log(
    //   await AsyncStorage.getItem('763a7d0c-f88d-4c9e-b926-65db801ac440'),
    // )
    console.log(await AsyncStorage.getAllKeys())
  } catch (error) {
    console.log(error)
  }
}

export {getAllNotes, saveNote}
