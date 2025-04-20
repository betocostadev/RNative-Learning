import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { ShoppingListItem } from '../components/ShoppingListItem'
import { theme } from '../theme/theme'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={[StyleSheet.absoluteFill, { backgroundColor: '#ffffff' }]} /> */}
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Dark Chocolate" isCompleted />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
  },
})
