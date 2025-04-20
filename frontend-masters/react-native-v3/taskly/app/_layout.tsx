import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { theme } from '../theme/theme'

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.cerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: 'Counter',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: 'My idea',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="head-lightbulb-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
