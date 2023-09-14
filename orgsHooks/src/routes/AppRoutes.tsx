import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ProducerRoutes from './ProducerRoutes'
import BestProducersRoutes from './BestProducersRoutes'

import HeartIcon from '../assets/heart.svg'
import HomeIcon from '../assets/home.svg'

const AppRoutes = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c7c7c7',
          tabBarIcon: ({color}) => {
            const Icon = route.name === 'Best Producers' ? HeartIcon : HomeIcon
            return <Icon color={color} />
          },
        })}>
        <Tab.Screen name="Home" component={ProducerRoutes} />
        <Tab.Screen name="Best Producers" component={BestProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
