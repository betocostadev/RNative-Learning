import { theme } from '@/styles/theme'
import { AntDesign } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable style={styles.addPressable} hitSlop={20}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colors.green}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="plants/[plant.id]" options={{ title: '' }} />
    </Stack>
  )
}

const styles = StyleSheet.create({
  addPressable: {
    marginRight: 12,
    marginBottom: 0,
  },
})
