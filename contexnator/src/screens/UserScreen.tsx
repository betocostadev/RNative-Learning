import { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamlist } from '../../routes/stack.routes'
import { UserContext } from '../contexts/UserContext'

type UserScreenProps = {
  route: RouteProp<RootStackParamlist, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  const { username } = route?.params
  const UserContextValue = useContext(UserContext)
  const name = UserContextValue?.contextName || 'user'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Welcome, ${username}! `}</Text>
      <Text style={styles.heading}>Context user is: {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
  },
})
