// import { StatusBar } from 'expo-status-bar'
import { TShoppingListItem } from '../types/listTypes'
import { useEffect, useState } from 'react'
import { ItemsList } from '../components/ItemsList'
import { orderShoppingList } from '../utils/functions'
import { getFromStorage, setInStorage } from '../utils/storage'
import { LayoutAnimation } from 'react-native'
import * as Haptics from 'expo-haptics'
import { EStorageKeys } from '../types/general'

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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  const handleToggleTaskStatus = (id: string) => {
    const updatedList = shoppingListItems.map((item) => {
      if (item.id === id) {
        item.completedAtTimestamp
          ? Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          : Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      }

      return item.id === id
        ? {
            ...item,
            completedAtTimestamp: item.completedAtTimestamp
              ? undefined
              : Date.now(),
            lastUpdatedTimestamp: Date.now(),
          }
        : item
    })

    setShoppingListItems(updatedList)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  const handleDelete = (id: string) => {
    setShoppingListItems(shoppingListItems.filter((item) => item.id !== id))
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  }

  useEffect(() => {
    const fetchSavedList = async () => {
      const data = await getFromStorage(EStorageKeys.shoppingListItems)
      if (data) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setShoppingListItems(data)
      }
    }

    const saveList = async () => {
      await setInStorage(EStorageKeys.shoppingListItems, shoppingListItems)
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
