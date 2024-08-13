import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import CameraCon from './src/components/CameraCon'

export default function App() {
  return (
    <View style={styles.container}>
      <CameraCon />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
})
