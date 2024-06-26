import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import homeStyles from './Style'

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <Text>Home!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
