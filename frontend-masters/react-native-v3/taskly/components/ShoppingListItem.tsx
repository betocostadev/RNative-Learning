import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../theme/theme'
import { Feather } from '@expo/vector-icons'
import { TShoppingListProps } from '../types/listTypes'

export function ShoppingListItem({
  item,
  onDelete,
  onToggleTaskStatus,
}: TShoppingListProps) {
  const { id, name, completedAtTimestamp } = item

  const deleteItem = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'There is no way to revert this.',
      [
        {
          text: 'Yes',
          onPress: () => onDelete(id),
          style: 'destructive',
        },
        {
          text: 'No',
          onPress: () => console.log('No pressed'),
          style: 'cancel',
          isPreferred: true,
        },
      ]
    )
  }

  const toggleTaskComplete = () => {
    onToggleTaskStatus(id)
  }

  return (
    <TouchableOpacity onPress={toggleTaskComplete}>
      <View
        style={[
          styles.itemContainer,
          completedAtTimestamp ? styles.completedItemContainer : undefined,
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {completedAtTimestamp ? (
            <Feather
              name="check-square"
              size={24}
              color={theme.colors.black}
              style={{ paddingRight: 10 }}
            />
          ) : (
            <Feather
              name="square"
              size={24}
              color={theme.colors.black}
              style={{ paddingRight: 10 }}
            />
          )}
          <Text
            style={[
              styles.itemText,
              completedAtTimestamp ? styles.completedItemText : undefined,
            ]}
          >
            {name}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button,
            completedAtTimestamp ? styles.completedItemButton : undefined,
          ]}
          onPress={deleteItem}
        >
          <Text style={styles.buttonText}>
            <Feather name="trash-2" size={24} color={theme.colors.white} />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.cerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: theme.fontSize.XL,
    fontWeight: '200',
  },
  button: {
    backgroundColor: theme.colors.red,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  completedItemContainer: {
    backgroundColor: theme.colors.lightGrey,
    borderBottomColor: theme.colors.lightGrey,
  },
  completedItemText: {
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colors.darkGrey,
  },
  completedItemButton: {
    backgroundColor: theme.colors.darkGrey,
  },
})
