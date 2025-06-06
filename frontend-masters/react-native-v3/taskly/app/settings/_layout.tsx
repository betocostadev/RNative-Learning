import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Settings' }} />
      <Stack.Screen
        name="about"
        options={{ title: 'About', presentation: 'modal' }}
      />
    </Stack>
  )
}
