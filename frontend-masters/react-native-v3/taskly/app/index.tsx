import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, TextInput } from 'react-native'
import { ShoppingListItem } from '../components/ShoppingListItem'
import { theme } from '../theme/theme'
import { useState } from 'react'

const initialList = [
  { id: '18:05:15 GMT+0100', name: 'Coffee', done: false },
  { id: '18:05:16 GMT+0100', name: 'Dark Chocolate', done: false },
  { id: '18:05:17 GMT+0100', name: 'Tea', done: true },
  { id: '18:05:17 GMT+0100', name: 'Olive Oil', done: true },
]

export default function App() {
  const [shoppingListItems, setShoppingListItems] = useState(initialList)
  const [inputItemText, setInputItemText] = useState<string>('')

  const handleSubmit = () => {
    if (inputItemText) {
      setShoppingListItems([
        ...shoppingListItems,
        {
          id: new Date().toTimeString(),
          name: inputItemText,
          done: false,
        },
      ])
      setInputItemText('')
    }
  }

  const handleDelete = (id: string) => {
    setShoppingListItems(shoppingListItems.filter((item) => item.id !== id))
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      {/* <View style={[StyleSheet.absoluteFill, { backgroundColor: '#ffffff' }]} /> */}
      <TextInput
        style={styles.textInput}
        placeholder="E.g. Pinga"
        value={inputItemText}
        onChangeText={setInputItemText}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingListItems.map((item) => (
        <ShoppingListItem
          item={item}
          key={item.id}
          handleDelete={handleDelete}
        />
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colors.lightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 14,
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: '#fffffff0',
  },
})
