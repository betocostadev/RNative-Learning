import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import UserScreen from '../screens/User'
import { useUser } from '../hooks/useUser'

export type RootStackParamlist = {
  Home: undefined
  User: { email: string; name: { first: string; last: string; title: string } }
}

const { Navigator, Screen } = createStackNavigator<RootStackParamlist>()

export default function StackRoutes() {
  const { selectedUser } = useUser()
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen
        name="User"
        component={UserScreen}
        options={{
          title: selectedUser
            ? `${selectedUser.name.first} ${selectedUser.name.last}`
            : 'User',
        }}
      />
    </Navigator>
  )
}
