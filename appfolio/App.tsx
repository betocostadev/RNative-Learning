import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import Router from './src/routes'

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
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
