import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

import { NavigationProp } from '@react-navigation/native'

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>
}) {
  const navToGallery = () => navigation.navigate('Gallery')

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to gallery" color="#fff1f1" onPress={navToGallery} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3c3c',
  },
})
