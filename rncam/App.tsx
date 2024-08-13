import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import CameraContainer from './src/components/CameraContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <CameraContainer />
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
