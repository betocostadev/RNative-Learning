import { Entypo } from '@expo/vector-icons'
import { Redirect, SplashScreen, Tabs } from 'expo-router'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'

export default function Layout() {
  SplashScreen.hideAsync()
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  )

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
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
