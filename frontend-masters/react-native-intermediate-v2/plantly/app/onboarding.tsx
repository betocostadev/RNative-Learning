import { Text, View, StyleSheet, Button } from 'react-native'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'expo-router'
import { ButtonX } from '@/components/ButtonX'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

export default function OnboardingScreen() {
  const router = useRouter()
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)

  const handlePress = () => {
    toggleHasOnboarded()
    router.replace('/')
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 0.5 }}
      colors={[
        theme.colors.green,
        theme.colors.appleGreen,
        theme.colors.limeGreen,
      ]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ButtonX title="Let me in!" onPress={handlePress} />
    </LinearGradient>
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
