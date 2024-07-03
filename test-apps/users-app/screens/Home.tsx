import { SafeAreaView, Text, View } from 'react-native'
import Users from '../components/Home/Users'
import { styles } from './HomeStyles'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Random Users</Text>
        <Users />
      </View>
    </SafeAreaView>
  )
}
