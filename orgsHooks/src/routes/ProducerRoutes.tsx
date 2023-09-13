import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Producer from '../screens/Producer'
import Home from '../screens/Home'

const ProducerRoutes = ({mainComponent = Home}) => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={mainComponent} />
      <Stack.Screen name="Producer" component={Producer} />
    </Stack.Navigator>
  )
}

export default ProducerRoutes
