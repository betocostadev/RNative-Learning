import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { theme } from '../../theme/theme'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Counter',
          headerRight: () => (
            <View>
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <MaterialCommunityIcons
                    name="history"
                    size={32}
                    color={theme.colors.darkGrey}
                  />
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Stack.Screen name="history" options={{ title: 'History' }} />
    </Stack>
  )
}
