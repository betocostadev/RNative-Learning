import { Entypo } from '@expo/vector-icons'
import { Redirect, SplashScreen, Tabs } from 'expo-router'
import { theme } from '@/styles/theme'
import { useUserStore } from '@/store/userStore'
import { SCREEN_TITLES } from '@/utils/constants'

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
          title: SCREEN_TITLES.Home,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: SCREEN_TITLES.Profile,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
