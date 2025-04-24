// import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import {
  ShoppingListItem,
  ShoppingListItemType,
} from '../components/ShoppingListItem'
import { theme } from '../theme/theme'
import { useState } from 'react'

export default function App() {
  const [shoppingListItems, setShoppingListItems] = useState<
    ShoppingListItemType[]
  >([])
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
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      data={shoppingListItems}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your shopping list is empty.</Text>
        </View>
      )}
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          placeholder="E.g. Pinga"
          value={inputItemText}
          onChangeText={setInputItemText}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => {
        return <ShoppingListItem item={item} handleDelete={handleDelete} />
      }}
    />
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
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  emptyText: {
    fontSize: theme.fontSize.LG,
  },
})
