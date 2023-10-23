import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import NoteEditor from './src/componentes/NoteEditor'
import {useEffect, useState} from 'react'
import {Note} from './src/componentes/Note'
import {createTable} from './src/services/notes'

export default function App() {
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    // const storedNotes = await getAllNotes()
    // if (storedNotes.length) {
    //   setNotes(storedNotes)
    // }
  }

  useEffect(() => {
    // getNotes()
    createTable()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        renderItem={note => <Note id={note.item.id} text={note.item.text} />}
        keyExtractor={note => note.id}
      />
      <NoteEditor getNotes={getNotes} />
      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})
