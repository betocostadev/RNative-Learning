import { Entypo } from '@expo/vector-icons'
import { Redirect, Tabs } from 'expo-router'
import { theme } from '@/styles/theme'

const hasFinishedOnboarding = false

export default function Layout() {
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
