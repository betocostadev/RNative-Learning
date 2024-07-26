import { Text, View, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamlist } from '../../routes/stack.routes'

type UserScreenProps = {
  route: RouteProp<RootStackParamlist, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  const { username } = route?.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Welcome, ${username}! `}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
})
