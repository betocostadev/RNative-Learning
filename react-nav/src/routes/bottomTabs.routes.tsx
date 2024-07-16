import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons/'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  const tabOptions = {
    tabBarInactiveTintColor: '#838383',
    tabBarActiveTintColor: '#ffffff',
    tabBarStyle: { backgroundColor: '#e4e4e4' },
    tabBarActiveBackgroundColor: '#808080',
  }

  const iconSize = 32

  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...tabOptions,
          title: 'Main',

          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={iconSize} />
          ),
        }}
      />
      <Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          ...tabOptions,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="video" size={iconSize} />
          ),
        }}
      />
    </Navigator>
  )
}
