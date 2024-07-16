import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'
import { BottomTabsRoutes } from './bottomTabs.routes'

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      <BottomTabsRoutes />
    </NavigationContainer>
  )
}
