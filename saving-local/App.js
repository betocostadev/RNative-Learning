import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import NotaEditor from './src/componentes/NotaEditor'
import {getAllNotes} from './src/store/notes'
import {useEffect, useState} from 'react'

export default function App() {
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    const storedNotes = await getAllNotes()
    if (storedNotes.length) {
      setNotes(storedNotes)
      console.log(notes)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor getNotes={getNotes} />
      <StatusBar />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})
