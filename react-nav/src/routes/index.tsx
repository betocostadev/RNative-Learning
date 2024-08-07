import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'
import { BottomTabsRoutes } from './bottomTabs.routes'
import { DrawerRoutes } from './drawer.routes'

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      {/* <BottomTabsRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  )
}
