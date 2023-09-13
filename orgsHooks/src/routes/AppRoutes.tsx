import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ProducerRoutes from './ProducerRoutes'
import BestProducersRoutes from './BestProducersRoutes'

const AppRoutes = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={ProducerRoutes} />
        <Tab.Screen name="Best Producers" component={BestProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
