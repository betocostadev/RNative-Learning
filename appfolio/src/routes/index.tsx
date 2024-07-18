import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack.routes'

export default function Router() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
