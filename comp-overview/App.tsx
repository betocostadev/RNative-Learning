import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Flex from './screens/Flex'
import Events from './screens/Events'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Components' }}
        />
        <Stack.Screen
          name="Flex"
          component={Flex}
          options={{ title: 'Flexbox' }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{ title: 'Events' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
