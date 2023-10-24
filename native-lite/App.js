import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import NoteEditor from './src/componentes/NoteEditor'
import {useEffect, useState} from 'react'
import {Note} from './src/componentes/Note'
import {createTable, getAllNotes} from './src/services/notes'

export default function App() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState({})

  const getNotes = async () => {
    const storedNotes = await getAllNotes()
    console.log(storedNotes)
    if (storedNotes.length) {
      setNotes(storedNotes)
    }
  }

  const selectNote = id => {
    if (!id) {
      setSelectedNote({})
      return
    }

    try {
      const note = notes.find(note => note.id === id)
      setSelectedNote(note)
    } catch (error) {
      setSelectedNote({})
      console.log(error)
    }
  }

  useEffect(() => {
    createTable()
    getNotes()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        renderItem={note => (
          <Note
            id={note.item.id}
            title={note.item.title}
            category={note.item.category}
            text={note.item.text}
            selectNote={selectNote}
          />
        )}
        keyExtractor={note => note.id}
      />
      <NoteEditor
        getNotes={getNotes}
        selectedNote={selectedNote}
        selectNote={selectNote}
      />
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
