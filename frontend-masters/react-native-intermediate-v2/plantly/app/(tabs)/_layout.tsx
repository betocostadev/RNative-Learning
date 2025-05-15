import { AntDesign, Entypo } from '@expo/vector-icons'
import { Link, Redirect, Tabs } from 'expo-router'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'
import { Pressable, StyleSheet } from 'react-native'

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  )

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
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
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  addPressable: {
    marginRight: 18,
    marginBottom: 4,
  },
})
