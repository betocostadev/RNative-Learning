import { RouteProp } from '@react-navigation/native'
import { Image, Text, View } from 'react-native'
import { RootStackParamlist } from '../routes/stack.routes'
import { useUser } from '../hooks/useUser'
import { styles } from './UsersStyles'

type UserScreenProps = {
  route: RouteProp<RootStackParamlist, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  const { selectedUser } = useUser()

  if (!selectedUser) {
    return (
      <View>
        <Text>No user selected</Text>
      </View>
    )
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          style={[styles.cardAvatar]}
          source={{ uri: selectedUser.picture.medium }}
        />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.nameContainer}>
          <Text style={styles.subheading}>Hi, my name is</Text>
          <Text
            style={styles.title}
          >{`${selectedUser.name.first} ${selectedUser.name.last}`}</Text>
          <Text>I am from {selectedUser.location.country}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.subheading}>My information</Text>
          <Text style={styles.infoBold}>
            Gender: <Text style={styles.info}>{selectedUser.gender}</Text>
          </Text>
          <Text style={styles.infoBold}>
            Location:{' '}
            <Text style={styles.info}>
              {selectedUser.location.city} / - {selectedUser.location.state}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
