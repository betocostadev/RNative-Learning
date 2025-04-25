// import { StatusBar } from 'expo-status-bar'
import { EStorage, TShoppingListItem } from '../types/listTypes'
import { useEffect, useState } from 'react'
import { ItemsList } from '../components/ItemsList'
import { orderShoppingList } from '../utils/functions'
import { getFromStorage, setInStorage } from '../utils/storage'
import { LayoutAnimation } from 'react-native'

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
          lastUpdatedTimestamp: Date.now(),
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
              lastUpdatedTimestamp: Date.now(),
            }
          : item
      )
    )
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  const handleDelete = (id: string) => {
    setShoppingListItems(shoppingListItems.filter((item) => item.id !== id))
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  useEffect(() => {
    const fetchSavedList = async () => {
      const data = await getFromStorage(EStorage.shoppingListItems)
      if (data) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setShoppingListItems(data)
      }
    }

    const saveList = async () => {
      await setInStorage(EStorage.shoppingListItems, shoppingListItems)
    }

    if (shoppingListItems.length === 0) {
      fetchSavedList()
    } else {
      saveList()
    }
  }, [shoppingListItems])

  return (
    <ItemsList
      items={orderShoppingList(shoppingListItems)}
      inputItemText={inputItemText}
      setInputItemText={setInputItemText}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
      onToggleTaskStatus={handleToggleTaskStatus}
    />
  )
}
