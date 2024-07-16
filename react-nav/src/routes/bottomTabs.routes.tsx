import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Gallery" component={GalleryScreen} />
    </Navigator>
  )
}
