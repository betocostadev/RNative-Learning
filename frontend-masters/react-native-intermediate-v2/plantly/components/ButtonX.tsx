import { theme } from '@/styles/theme'
import { StyleSheet, Text, Pressable, Platform } from 'react-native'
import * as Haptics from 'expo-haptics'

type Props = {
  title: string
  onPress: () => void
}

export function ButtonX({ title, onPress }: Props) {
  const handlePress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }
    onPress()
  }
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => {
        return pressed ? [styles.button, styles.buttonPressed] : styles.button
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.green,
  },
  buttonPressed: {
    backgroundColor: theme.colors.leafyGreen,
  },
})
