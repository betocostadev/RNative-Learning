import { Text, View, StyleSheet, Platform } from 'react-native'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'expo-router'
import { ButtonX } from '@/components/ButtonX'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import PlantlyImage from '@/components/PlantlyImage'

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
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated!
        </Text>
      </View>
      <PlantlyImage />
      <ButtonX title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 48,
    color: theme.colors.white,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'Caveat-Bold',
  },
  tagline: {
    marginHorizontal: 4,
    fontSize: 32,
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'Caveat-Regular',
      android: 'Caveat_400Regular',
    }),
  },
})
