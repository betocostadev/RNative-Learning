import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import UserScreen from '../screens/User'

export type RootStackParamlist = {
  Home: undefined
  User: { email: string; name: { first: string; last: string; title: string } }
}

const { Navigator, Screen } = createStackNavigator<RootStackParamlist>()

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="User" component={UserScreen} />
    </Navigator>
  )
}
