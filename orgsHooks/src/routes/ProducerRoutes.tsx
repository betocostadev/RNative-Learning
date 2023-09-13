import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Producer from '../screens/Producer'
import Home from '../screens/Home'

export type RootStackParamList = {
  HomeScreen: undefined
  Producer: {name: string}
}

const ProducerRoutes = ({mainComponent = Home}) => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={mainComponent} />
      <Stack.Screen name="Producer" component={Producer} />
    </Stack.Navigator>
  )
}

export default ProducerRoutes
