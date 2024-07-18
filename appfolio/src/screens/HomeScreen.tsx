import { NavigationProp } from '@react-navigation/native'
import {
  Button,
  Image,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native'
import profile from '../../assets/profile.jpg'
import { styles } from './HomeScreenStyles'
import LinkButton from '../components/Home/LinkButton'

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>
}) {
  const navToSkills = () => navigation.navigate('Skills')

  const placeholder = () => alert('Pressed!')

  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profileImage} />
      <View>
        <LinkButton title="LinkedIn" fn={placeholder} />
        <LinkButton title="Github" fn={placeholder} />
      </View>
      <Text>Home Screen</Text>
      <Button title="Check my Skills" onPress={navToSkills} />
    </View>
  )
}
