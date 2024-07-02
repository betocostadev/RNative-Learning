import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Users from '../components/home/Users'

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Users</Text>
        <View>
          <Users />
        </View>
      </View>
    </SafeAreaView>
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
