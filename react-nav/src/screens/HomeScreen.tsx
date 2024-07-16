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
      <Text style={styles.title}>Home</Text>
      <Button title="Go to gallery" color="#2b2b2b" onPress={navToGallery} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb9b9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 8,
  },
})
