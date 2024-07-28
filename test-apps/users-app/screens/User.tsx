import { RouteProp } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParamlist } from '../routes/stack.routes'
type UserScreenProps = {
  route: RouteProp<RootStackParamlist, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  // const { username } = route?.params
  // const UserContextValue = useContext(UserContext)
  // const name = UserContextValue?.contextName || 'user'
  return (
    <View>
      <Text>User page</Text>
    </View>
  )
}
