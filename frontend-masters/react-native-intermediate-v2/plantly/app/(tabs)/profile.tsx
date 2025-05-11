import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)
  const handlePress = () => toggleHasOnboarded()

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Redo onboard" onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
