import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import NoteEditor from './src/componentes/NoteEditor'
import {useEffect, useState} from 'react'
import {Note} from './src/componentes/Note'
import {createTable, getAllNotes, getNotesByFilter} from './src/services/notes'
import {Picker} from '@react-native-picker/picker'

export default function App() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('')

  const getNotes = async () => {
    const storedNotes = await getAllNotes()
    if (storedNotes.length) {
      setNotes(storedNotes)
    }
  }

  const getFilteredNotes = async () => {
    const storedNotes = await getNotesByFilter(selectedCategory)
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

  const handleCategoryFilter = value => {
    setSelectedCategory(value)
  }

  useEffect(() => {
    createTable()
    if (!selectedCategory) {
      getNotes()
    } else {
      getFilteredNotes()
    }
  }, [selectedCategory])

  const HeaderPicker = () => {
    return (
      <View>
        <Text style={styles.filterTitle}>Filter by Category</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={itemValue => handleCategoryFilter(itemValue)}>
          <Picker.Item label="All" value="" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Work" value="Work" />
          <Picker.Item label="Others" value="Others" />
        </Picker>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <FlatList
        data={notes}
        ListHeaderComponent={notes.length ? <HeaderPicker /> : null}
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
  title: {
    marginLeft: 6,
    marginVertical: 10,
    fontSize: 28,
    fontWeight: '600',
  },
  filterTitle: {
    marginLeft: 6,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '500',
  },
})
