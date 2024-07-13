import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'

const { Screen, Navigator } = createStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Main menu', headerTintColor: '#1a81ff' }}
      />
      <Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ title: 'Gallery', headerTintColor: '#1a81ff' }}
      />
    </Navigator>
  )
}
