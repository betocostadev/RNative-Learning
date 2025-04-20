import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../theme/theme'
import { Feather } from '@expo/vector-icons'

type ShoppingLIProps = {
  name: string
  isCompleted?: boolean
}

export function ShoppingListItem({
  name,
  isCompleted = false,
}: ShoppingLIProps) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'There is no way to revert this.',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes pressed'),
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

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedItemContainer : undefined,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {isCompleted ? (
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
            isCompleted ? styles.completedItemText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          isCompleted ? styles.completedItemButton : undefined,
        ]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>
          <Feather name="trash-2" size={24} color={theme.colors.white} />
        </Text>
      </TouchableOpacity>
    </View>
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
