import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../theme/theme'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Link href="/settings/about">About</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: 24,
  },
})
