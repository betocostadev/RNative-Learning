import { Text, View, StyleSheet, Button } from 'react-native'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'expo-router'

export default function OnboardingScreen() {
  const router = useRouter()
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)

  const handlePress = () => {
    toggleHasOnboarded()
    router.replace('/')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
      <Button title="Open up!" onPress={handlePress} />
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
