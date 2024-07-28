import { RouteProp } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParamlist } from '../routes/stack.routes'
import { useUser } from '../hooks/useUser'

type UserScreenProps = {
  route: RouteProp<RootStackParamlist, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  // const { username } = route?.params
  // const UserContextValue = useContext(UserContext)
  // const name = UserContextValue?.contextName || 'user'
  const { selectedUser } = useUser()

  return (
    <View>
      <Text>User page</Text>
      <Text>{selectedUser?.name.first}</Text>
    </View>
  )
}
