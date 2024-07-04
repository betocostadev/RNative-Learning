import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Home from './screens/Home'
import { CountryProvider } from './providers/CountryProvider'

export default function App() {
  return (
    <CountryProvider>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </CountryProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
