import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from './theme/theme'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    borderBottomColor: '#1a759f',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: { fontSize: theme.fontXL, fontWeight: '200' },
})
