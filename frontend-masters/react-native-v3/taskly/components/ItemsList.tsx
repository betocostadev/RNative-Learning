import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { TShoppingListItem, TShoppingListProps } from '../types/listTypes'
import { ShoppingListItem } from './ShoppingListItem'
import { theme } from '../theme/theme'
import { Dispatch, SetStateAction } from 'react'

type TListItemProps = {
  items: TShoppingListItem[]
  onToggleTaskStatus: TShoppingListProps['onToggleTaskStatus']
  onDelete: TShoppingListProps['onDelete']
  inputItemText: string
  setInputItemText: Dispatch<SetStateAction<string>>
  onSubmit: () => void
}

export function ItemsList({
  items,
  inputItemText,
  setInputItemText,
  onSubmit,
  onToggleTaskStatus,
  onDelete,
}: TListItemProps) {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      data={items}
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
          onSubmitEditing={onSubmit}
        />
      }
      renderItem={({ item }) => {
        return (
          <ShoppingListItem
            item={item}
            onToggleTaskStatus={onToggleTaskStatus}
            onDelete={onDelete}
          />
        )
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
