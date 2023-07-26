import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import Home from './src/screens/home'
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratLight: Montserrat_300Light,
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  )
}
