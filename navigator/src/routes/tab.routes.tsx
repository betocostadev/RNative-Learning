import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Feed from '../screens/Feed'
import New from '../screens/New'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          tabBarLabel: 'New',
        }}
      />
    </Tab.Navigator>
  )
}
