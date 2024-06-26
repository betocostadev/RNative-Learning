import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          drawerLabel: 'Profile',
        }}
      />
    </Drawer.Navigator>
  )
}
