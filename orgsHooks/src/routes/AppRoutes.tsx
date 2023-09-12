import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'
import BestProducers from '../screens/BestProducers'
const AppRoutes = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Best Producers" component={BestProducers} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
