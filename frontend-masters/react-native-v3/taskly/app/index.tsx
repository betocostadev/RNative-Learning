// import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { TShoppingListItem } from '../types/listTypes'
import { theme } from '../theme/theme'
import { useState } from 'react'
import { ItemsList } from '../components/ItemsList'

export default function App() {
  const [shoppingListItems, setShoppingListItems] = useState<
    TShoppingListItem[]
  >([])
  const [inputItemText, setInputItemText] = useState<string>('')

  const handleSubmit = () => {
    if (inputItemText) {
      setShoppingListItems([
        ...shoppingListItems,
        {
          id: new Date().toTimeString(),
          name: inputItemText,
          completedAtTimestamp: undefined,
        },
      ])
      setInputItemText('')
    }
  }

  const handleToggleTaskStatus = (id: string) => {
    setShoppingListItems(
      shoppingListItems.map((item) =>
        item.id === id
          ? {
              ...item,
              completedAtTimestamp: item.completedAtTimestamp
                ? undefined
                : Date.now(),
            }
          : item
      )
    )
  }

  const handleDelete = (id: string) => {
    setShoppingListItems(shoppingListItems.filter((item) => item.id !== id))
  }

  return (
    <ItemsList
      items={shoppingListItems}
      inputItemText={inputItemText}
      setInputItemText={setInputItemText}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
      onToggleTaskStatus={handleToggleTaskStatus}
    />
  )
}
