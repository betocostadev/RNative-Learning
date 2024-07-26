import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../src/screens/HomeScreen'
import UserScreen from '../src/screens/UserScreen'

export type RootStackParamlist = {
  Home: undefined
  User: { username: string }
}
const { Screen, Navigator } = createStackNavigator<RootStackParamlist>()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', headerTintColor: '#1a81ff' }}
      />
      <Screen
        name="User"
        component={UserScreen}
        options={{ title: 'User', headerTintColor: '#1a81ff' }}
      />
    </Navigator>
  )
}
