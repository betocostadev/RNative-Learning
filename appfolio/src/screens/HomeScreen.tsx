import { NavigationProp } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>
}) {
  const navToSkills = () => navigation.navigate('Skills')

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Check my Skills" onPress={navToSkills} />
    </View>
  )
}
