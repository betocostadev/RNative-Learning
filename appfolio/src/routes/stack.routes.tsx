import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SkillsScreen from '../screens/SkillsScreen'

const { Screen, Navigator } = createStackNavigator()

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Skills" component={SkillsScreen} />
    </Navigator>
  )
}
