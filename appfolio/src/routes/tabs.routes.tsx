import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/HomeScreen'
import SkillsScreen from '../screens/SkillsScreen'
import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { Screen, Navigator } = createMaterialTopTabNavigator()

export default function TabsRoutes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
        style={{ justifyContent: 'center' }}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Skills" component={SkillsScreen} />
      </Navigator>
    </SafeAreaView>
  )
}
